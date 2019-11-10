from django.test import TestCase
from django.contrib.auth import get_user_model
from users.schema import CreateUser, DeleteUser, EnableUser, DisableUser


class UserTestCase(TestCase):
    def setUp(self):
        create_user = CreateUser()
        create_user.mutate('test_user@email.com', 'Test', 'User', 'P@ssword1',
                           'P@ssword1', 'test_user')

    def tearDown(self):
        get_user_model().objects.filter(email='test_user@email.com').delete()

    def test_user_creation(self):
        create_user = CreateUser()
        result = create_user.mutate('test_user2@email.com', 'Test', 'User',
                                    'P@ssword1', 'P@ssword1', 'test_user2')
        expected_result = """{
          "data": {
            "createUser": {
              "user": {
                "username": "test_user",
                "dateJoined": "2019-09-04T03:31:13.380047+00:00"
              }
            }
          }
        }"""
        self.assertEqual(result, expected_result)

    def test_user_delete(self):
        delete_user = DeleteUser()
        result = delete_user.mutate()
        expected_result = """{
          "data": {
            "deleteUser": {
              "user": {
                "username": "test_user",
                "firstName": "Test",
                "lastName": "User"
              }
            }
          }
        }"""
        self.assertEqual(result, expected_result)

    def test_user_disbale(self):
        disabled_user = DisableUser()
        result = disabled_user.mutate(False)
        expected_result = """{
          "data": {
            "disabledUser": null
          }
        }"""
        self.assertEqual(result, expected_result)

    def test_user_enable(self):
        enabled_user = EnableUser()
        result = enabled_user.mutate(True)
        expected_result = """{
                  "data": {
                    "enabledUser": null
                  }
                }"""
        self.assertEqual(result, expected_result)

    def test_valid_email(self):
        create_user = CreateUser()
        result = create_user.mutate('test_user@', 'Test', 'User', 'P@ssword1',
                                    'P@ssword1', 'test_user')
        result2 = create_user.mutate('test_user@gmail', 'Test', 'User',
                                     'P@ssword1', 'P@ssword1', 'test_user')
        result3 = create_user.mutate('test_user@.com', 'Test', 'User',
                                     'P@ssword1', 'P@ssword1', 'test_user')
        expected_result = """{
          "errors": [
            {
              "message": "['Enter a valid email address.']",
              "locations": [
                {
                  "line": 36,
                  "column": 3
                }
              ],
              "path": [
                "createUser"
              ]
            }
          ],
          "data": {
            "createUser": null
          }
        }"""

        self.assertEqual(result, expected_result)
        self.assertEqual(result2, expected_result)
        self.assertEqual(result3, expected_result)

    def test_email_already_exists(self):
        create_user = CreateUser()
        result = create_user.mutate('test_user@email.com', 'Test', 'User',
                                    'P@ssword1', 'P@ssword1', 'test_user')
        expected_result = """{
          "errors": [
            {
              "message": "User with that email already exists",
              "locations": [
                {
                  "line": 36,
                  "column": 3
                }
              ],
              "path": [
                "createUser"
              ]
            }
          ],
          "data": {
            "createUser": null
          }
        }"""
        self.assertEqual(result, expected_result)

    def test_username_already_exists(self):
        create_user = CreateUser()
        result = create_user.mutate('test_user@email.com', 'Test', 'User',
                                    'P@ssword1', 'P@ssword1', 'test_user')
        expected_result = """{
          "errors": [
            {
              "message": "That username is already taken. Please use another name.",
              "locations": [
                {
                  "line": 36,
                  "column": 3
                }
              ],
              "path": [
                "createUser"
              ]
            }
          ],
          "data": {
            "createUser": null
          }
        }"""
        self.assertEqual(result, expected_result)

    def test_valid_password(self):
        create_user = CreateUser()
        result = create_user.mutate('test_user@email.com', 'Test', 'User',
                                    'P@ssword1', 'P@ssword', 'test_user')
        expected_result = """{
          "errors": [
            {
              "message": "Passwords do not match",
              "locations": [
                {
                  "line": 36,
                  "column": 3
                }
              ],
              "path": [
                "createUser"
              ]
            }
          ],
          "data": {
            "createUser": null
          }
        }"""
        self.assertEqual(result, expected_result)

    def test_password_security(self):
        create_user = CreateUser()
        result = create_user.mutate('test_user@email.com', 'Test', 'User',
                                    'P@ssword', 'P@ssword1', 'test_user')
        result2 = create_user.mutate('test_user@email.com', 'Test', 'User',
                                     'Password1', 'P@ssword1', 'test_user')
        result3 = create_user.mutate('test_user@email.com', 'Test', 'User',
                                     'p@ssword1', 'P@ssword1', 'test_user')
        expected_result = """{
          "errors": [
            {
              "message": "Password does not meet security requirements",
              "locations": [
                {
                  "line": 36,
                  "column": 3
                }
              ],
              "path": [
                "createUser"
              ]
            }
          ],
          "data": {
            "createUser": null
          }
        }"""
        self.assertEqual(result, expected_result)
        self.assertEqual(result2, expected_result)
        self.assertEqual(result3, expected_result)
