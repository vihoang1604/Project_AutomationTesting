$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("loginRegisters/login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Demo Website",
  "description": "",
  "id": "login-demo-website",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Login Demo Website Successfully",
  "description": "",
  "id": "login-demo-website;login-demo-website-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I input username as \u003cusername\u003e password as \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I verify that system is already login successfully with \u003cusername\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I log out",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "login-demo-website;login-demo-website-successfully;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 12,
      "id": "login-demo-website;login-demo-website-successfully;;1"
    },
    {
      "cells": [
        "admin",
        "admin"
      ],
      "line": 13,
      "id": "login-demo-website;login-demo-website-successfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Open website http://localhost:8080/demo/",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8080/demo/",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 6286508200,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Login Demo Website Successfully",
  "description": "",
  "id": "login-demo-website;login-demo-website-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I input username as admin password as admin",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I verify that system is already login successfully with admin",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I log out",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 20
    },
    {
      "val": "admin",
      "offset": 38
    }
  ],
  "location": "LoginTest.openAccount(String,String)"
});
formatter.result({
  "duration": 4260589500,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.clickLoginButton()"
});
formatter.result({
  "duration": 4286292700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 56
    }
  ],
  "location": "LoginTest.verifyUserLoginSuccessfully(String)"
});
formatter.result({
  "duration": 2059249900,
  "status": "passed"
});
formatter.match({
  "location": "CommonTest.clickLogoutButton()"
});
formatter.result({
  "duration": 2066402200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "Login Demo Website Unsuccessfully",
  "description": "",
  "id": "login-demo-website;login-demo-website-unsuccessfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "I input username as \u003cusername\u003e password as \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I verify that system is already login unsuccessfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "login-demo-website;login-demo-website-unsuccessfully;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 20,
      "id": "login-demo-website;login-demo-website-unsuccessfully;;1"
    },
    {
      "cells": [
        "admin2",
        "admin"
      ],
      "line": 21,
      "id": "login-demo-website;login-demo-website-unsuccessfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Open website http://localhost:8080/demo/",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8080/demo/",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 5278027400,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Login Demo Website Unsuccessfully",
  "description": "",
  "id": "login-demo-website;login-demo-website-unsuccessfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "I input username as admin2 password as admin",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I verify that system is already login unsuccessfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "admin2",
      "offset": 20
    },
    {
      "val": "admin",
      "offset": 39
    }
  ],
  "location": "LoginTest.openAccount(String,String)"
});
formatter.result({
  "duration": 4186845900,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.clickLoginButton()"
});
formatter.result({
  "duration": 4262027500,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.verifyUserLoginUnsuccessfully()"
});
formatter.result({
  "duration": 2047472900,
  "status": "passed"
});
formatter.uri("loginRegisters/register.feature");
formatter.feature({
  "line": 1,
  "name": "Register account",
  "description": "",
  "id": "register-account",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Register account successfully",
  "description": "",
  "id": "register-account;register-account-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I click register option button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I input firstname as \u003cfirstname\u003e lastname as \u003clastname\u003e username as \u003cusername\u003e password as \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click register submit",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I verify that system is register successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I login successfully as \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I log out",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "register-account;register-account-successfully;",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "username",
        "password"
      ],
      "line": 14,
      "id": "register-account;register-account-successfully;;1"
    },
    {
      "cells": [
        "nhung",
        "nguyen",
        "nhungnguyen",
        "nhung270599"
      ],
      "line": 15,
      "id": "register-account;register-account-successfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Open website http://localhost:8080/demo/",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8080/demo/",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 6066662000,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Register account successfully",
  "description": "",
  "id": "register-account;register-account-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I click register option button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I input firstname as nhung lastname as nguyen username as nhungnguyen password as nhung270599",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click register submit",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I verify that system is register successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I login successfully as nhungnguyen and nhung270599",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I log out",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterTest.clickRegisterOption()"
});
formatter.result({
  "duration": 3069010300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nhung",
      "offset": 21
    },
    {
      "val": "nguyen",
      "offset": 39
    },
    {
      "val": "nhungnguyen",
      "offset": 58
    },
    {
      "val": "nhung270599",
      "offset": 82
    }
  ],
  "location": "RegisterTest.inputAccountInformation(String,String,String,String)"
});
formatter.result({
  "duration": 6424026700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterTest.clickRegisterSubmit()"
});
formatter.result({
  "duration": 3266032100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterTest.verifyUserRegisterSuccessfully()"
});
formatter.result({
  "duration": 3041253500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nhungnguyen",
      "offset": 24
    },
    {
      "val": "nhung270599",
      "offset": 40
    }
  ],
  "location": "CommonTest.loginSuccess(String,String)"
});
formatter.result({
  "duration": 7518809000,
  "status": "passed"
});
formatter.match({
  "location": "CommonTest.clickLogoutButton()"
});
formatter.result({
  "duration": 2031056600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Register account unsuccessfully",
  "description": "",
  "id": "register-account;register-account-unsuccessfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I click register option button",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I input firstname as \u003cfirstname\u003e lastname as \u003clastname\u003e username as \u003cusername\u003e password as \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click register submit",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I verify that system is register unsuccessfully with \u003cusername\u003e already is taken",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "register-account;register-account-unsuccessfully;",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "username",
        "password"
      ],
      "line": 23,
      "id": "register-account;register-account-unsuccessfully;;1"
    },
    {
      "cells": [
        "nhung",
        "nguyen",
        "nhungnguyen",
        "nhung270599"
      ],
      "line": 24,
      "id": "register-account;register-account-unsuccessfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Open website http://localhost:8080/demo/",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8080/demo/",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 5393400800,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Register account unsuccessfully",
  "description": "",
  "id": "register-account;register-account-unsuccessfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I click register option button",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I input firstname as nhung lastname as nguyen username as nhungnguyen password as nhung270599",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click register submit",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I verify that system is register unsuccessfully with nhungnguyen already is taken",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterTest.clickRegisterOption()"
});
formatter.result({
  "duration": 3061021000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nhung",
      "offset": 21
    },
    {
      "val": "nguyen",
      "offset": 39
    },
    {
      "val": "nhungnguyen",
      "offset": 58
    },
    {
      "val": "nhung270599",
      "offset": 82
    }
  ],
  "location": "RegisterTest.inputAccountInformation(String,String,String,String)"
});
formatter.result({
  "duration": 6355732100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterTest.clickRegisterSubmit()"
});
formatter.result({
  "duration": 3263251900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nhungnguyen",
      "offset": 53
    }
  ],
  "location": "RegisterTest.verifyUserLoginUnsuccessfully(String)"
});
formatter.result({
  "duration": 3032350800,
  "status": "passed"
});
formatter.uri("managementAccounts/addAccount.feature");
formatter.feature({
  "line": 1,
  "name": "Add Account",
  "description": "",
  "id": "add-account",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Add Account successfully",
  "description": "",
  "id": "add-account;add-account-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I scroll down page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click loginAccountTab",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I scroll up page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click addAccount",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I add account with firstName as\u003cfirstName\u003e, lastName as \u003clastName\u003e, role as \u003crole\u003e, userName as \u003cuserName\u003e, Password \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click summit add",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I verify successfully with firstName as\u003cfirstName\u003e, lastName as \u003clastName\u003e, role as \u003crole\u003e, userName as \u003cuserName\u003e, Password \u003cpassword\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I log out",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I login successfully as \u003cuserName\u003e and \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I log out",
  "keyword": "And "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "add-account;add-account-successfully;",
  "rows": [
    {
      "cells": [
        "firstName",
        "lastName",
        "role",
        "userName",
        "password"
      ],
      "line": 19,
      "id": "add-account;add-account-successfully;;1"
    },
    {
      "cells": [
        "thao",
        "ngo",
        "Admin",
        "thao.ngo",
        "123456"
      ],
      "line": 20,
      "id": "add-account;add-account-successfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Open website http://localhost:8080/demo/#!/",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I login successfully as admin and admin",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8080/demo/#!/",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 6098760400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 24
    },
    {
      "val": "admin",
      "offset": 34
    }
  ],
  "location": "CommonTest.loginSuccess(String,String)"
});
formatter.result({
  "duration": 7550159000,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Add Account successfully",
  "description": "",
  "id": "add-account;add-account-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I scroll down page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click loginAccountTab",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I scroll up page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click addAccount",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I add account with firstName asthao, lastName as ngo, role as Admin, userName as thao.ngo, Password 123456",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click summit add",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I verify successfully with firstName asthao, lastName as ngo, role as Admin, userName as thao.ngo, Password 123456",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I log out",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I login successfully as thao.ngo and 123456",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I log out",
  "keyword": "And "
});
formatter.match({
  "location": "CommonTest.scrollDown()"
});
formatter.result({
  "duration": 5284501300,
  "status": "passed"
});
formatter.match({
  "location": "CommonTest.clickLoginAccountTab()"
});
formatter.result({
  "duration": 3076707000,
  "status": "passed"
});
formatter.match({
  "location": "CommonTest.scrollUp()"
});
formatter.result({
  "duration": 3028342900,
  "status": "passed"
});
formatter.match({
  "location": "AddAccountTest.clickAddAccountButton()"
});
formatter.result({
  "duration": 2249670200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "thao",
      "offset": 31
    },
    {
      "val": "ngo",
      "offset": 49
    },
    {
      "val": "Admin",
      "offset": 62
    },
    {
      "val": "thao.ngo",
      "offset": 81
    },
    {
      "val": "123456",
      "offset": 100
    }
  ],
  "location": "AddAccountTest.informationAddAccount(String,String,String,String,String)"
});
formatter.result({
  "duration": 4873710300,
  "status": "passed"
});
formatter.match({
  "location": "AddAccountTest.clickSummit()"
});
formatter.result({
  "duration": 2258404300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "thao",
      "offset": 39
    },
    {
      "val": "ngo",
      "offset": 57
    },
    {
      "val": "Admin",
      "offset": 70
    },
    {
      "val": "thao.ngo",
      "offset": 89
    },
    {
      "val": "123456",
      "offset": 108
    }
  ],
  "location": "CommonTest.verifyAddAccountSuccessfully(String,String,String,String,String)"
});
formatter.result({
  "duration": 4101838400,
  "status": "passed"
});
formatter.match({
  "location": "CommonTest.clickLogoutButton()"
});
formatter.result({
  "duration": 2044692700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "thao.ngo",
      "offset": 24
    },
    {
      "val": "123456",
      "offset": 37
    }
  ],
  "location": "CommonTest.loginSuccess(String,String)"
});
formatter.result({
  "duration": 7464537600,
  "status": "passed"
});
formatter.match({
  "location": "CommonTest.clickLogoutButton()"
});
formatter.result({
  "duration": 2046799600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 22,
  "name": "Add Account unsuccessfully with null input data",
  "description": "",
  "id": "add-account;add-account-unsuccessfully-with-null-input-data",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "I scroll down page",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I click loginAccountTab",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I scroll up page",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click addAccount",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I add account with firstName as\u003cfirstName\u003e, lastName as \u003clastName\u003e, role as \u003crole\u003e, userName as \u003cuserName\u003e, Password \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click summit add",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I verify successfully with firstName as\u003cfirstName\u003e, lastName as \u003clastName\u003e, role as \u003crole\u003e, userName as \u003cuserName\u003e, Password \u003cpassword\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I log out",
  "keyword": "And "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "add-account;add-account-unsuccessfully-with-null-input-data;",
  "rows": [
    {
      "cells": [
        "firstName",
        "lastName",
        "role",
        "userName",
        "password"
      ],
      "line": 32,
      "id": "add-account;add-account-unsuccessfully-with-null-input-data;;1"
    },
    {
      "cells": [
        "thao",
        "",
        "Admin",
        "thao.le",
        "123456"
      ],
      "line": 33,
      "id": "add-account;add-account-unsuccessfully-with-null-input-data;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Open website http://localhost:8080/demo/#!/",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I login successfully as admin and admin",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8080/demo/#!/",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 5040267000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 24
    },
    {
      "val": "admin",
      "offset": 34
    }
  ],
  "location": "CommonTest.loginSuccess(String,String)"
});
formatter.result({
  "duration": 7495063700,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Add Account unsuccessfully with null input data",
  "description": "",
  "id": "add-account;add-account-unsuccessfully-with-null-input-data;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "I scroll down page",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I click loginAccountTab",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I scroll up page",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click addAccount",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I add account with firstName asthao, lastName as , role as Admin, userName as thao.le, Password 123456",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click summit add",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I verify successfully with firstName asthao, lastName as , role as Admin, userName as thao.le, Password 123456",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I log out",
  "keyword": "And "
});
formatter.match({
  "location": "CommonTest.scrollDown()"
});
formatter.result({
  "duration": 5259188800,
  "status": "passed"
});
formatter.match({
  "location": "CommonTest.clickLoginAccountTab()"
});
formatter.result({
  "duration": 3064815100,
  "status": "passed"
});
formatter.match({
  "location": "CommonTest.scrollUp()"
});
formatter.result({
  "duration": 3030357200,
  "status": "passed"
});
formatter.match({
  "location": "AddAccountTest.clickAddAccountButton()"
});
formatter.result({
  "duration": 2272843800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "thao",
      "offset": 31
    },
    {
      "val": "",
      "offset": 49
    },
    {
      "val": "Admin",
      "offset": 59
    },
    {
      "val": "thao.le",
      "offset": 78
    },
    {
      "val": "123456",
      "offset": 96
    }
  ],
  "location": "AddAccountTest.informationAddAccount(String,String,String,String,String)"
});
formatter.result({
  "duration": 4867368300,
  "status": "passed"
});
formatter.match({
  "location": "AddAccountTest.clickSummit()"
});
formatter.result({
  "duration": 2073398200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "thao",
      "offset": 39
    },
    {
      "val": "",
      "offset": 57
    },
    {
      "val": "Admin",
      "offset": 67
    },
    {
      "val": "thao.le",
      "offset": 86
    },
    {
      "val": "123456",
      "offset": 104
    }
  ],
  "location": "CommonTest.verifyAddAccountSuccessfully(String,String,String,String,String)"
});
formatter.result({
  "duration": 4086983000,
  "status": "passed"
});
formatter.match({
  "location": "CommonTest.clickLogoutButton()"
});
formatter.result({
  "duration": 2053269400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 35,
  "name": "Add Account unsuccessfully with Account already exists",
  "description": "",
  "id": "add-account;add-account-unsuccessfully-with-account-already-exists",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 36,
  "name": "I scroll down page",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "I click loginAccountTab",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I scroll up page",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I click addAccount",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I add account with firstName as\u003cfirstName\u003e, lastName as \u003clastName\u003e, role as \u003crole\u003e, userName as \u003cuserName\u003e, Password \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I click summit add",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I verify unsuccessfully with account already exists with userName as \u003cuserName\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "I log out",
  "keyword": "And "
});
formatter.examples({
  "line": 44,
  "name": "",
  "description": "",
  "id": "add-account;add-account-unsuccessfully-with-account-already-exists;",
  "rows": [
    {
      "cells": [
        "firstName",
        "lastName",
        "role",
        "userName",
        "password"
      ],
      "line": 45,
      "id": "add-account;add-account-unsuccessfully-with-account-already-exists;;1"
    },
    {
      "cells": [
        "thao",
        "ngo",
        "Admin",
        "thao.ngo",
        "123456"
      ],
      "line": 46,
      "id": "add-account;add-account-unsuccessfully-with-account-already-exists;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Open website http://localhost:8080/demo/#!/",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I login successfully as admin and admin",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8080/demo/#!/",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 5044996600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 24
    },
    {
      "val": "admin",
      "offset": 34
    }
  ],
  "location": "CommonTest.loginSuccess(String,String)"
});
formatter.result({
  "duration": 7508933700,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Add Account unsuccessfully with Account already exists",
  "description": "",
  "id": "add-account;add-account-unsuccessfully-with-account-already-exists;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 36,
  "name": "I scroll down page",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "I click loginAccountTab",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I scroll up page",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I click addAccount",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I add account with firstName asthao, lastName as ngo, role as Admin, userName as thao.ngo, Password 123456",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I click summit add",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I verify unsuccessfully with account already exists with userName as thao.ngo",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "I log out",
  "keyword": "And "
});
formatter.match({
  "location": "CommonTest.scrollDown()"
});
formatter.result({
  "duration": 5281060400,
  "status": "passed"
});
formatter.match({
  "location": "CommonTest.clickLoginAccountTab()"
});
formatter.result({
  "duration": 3046944500,
  "status": "passed"
});
formatter.match({
  "location": "CommonTest.scrollUp()"
});
formatter.result({
  "duration": 3020987200,
  "status": "passed"
});
formatter.match({
  "location": "AddAccountTest.clickAddAccountButton()"
});
formatter.result({
  "duration": 2245481200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "thao",
      "offset": 31
    },
    {
      "val": "ngo",
      "offset": 49
    },
    {
      "val": "Admin",
      "offset": 62
    },
    {
      "val": "thao.ngo",
      "offset": 81
    },
    {
      "val": "123456",
      "offset": 100
    }
  ],
  "location": "AddAccountTest.informationAddAccount(String,String,String,String,String)"
});
formatter.result({
  "duration": 4891046200,
  "status": "passed"
});
formatter.match({
  "location": "AddAccountTest.clickSummit()"
});
formatter.result({
  "duration": 2246695800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "thao.ngo",
      "offset": 69
    }
  ],
  "location": "AddAccountTest.verifyUnsuccessfullyAccountAlreadyExits(String)"
});
formatter.result({
  "duration": 2054971000,
  "status": "passed"
});
formatter.match({
  "location": "CommonTest.clickLogoutButton()"
});
formatter.result({
  "duration": 2042371600,
  "status": "passed"
});
formatter.uri("managementAccounts/deleteAccount.feature");
formatter.feature({
  "line": 1,
  "name": "Delete Account",
  "description": "",
  "id": "delete-account",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Open website http://localhost:8080/demo/#!/",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I login successfully as admin and admin",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8080/demo/#!/",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 6045182200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 24
    },
    {
      "val": "admin",
      "offset": 34
    }
  ],
  "location": "CommonTest.loginSuccess(String,String)"
});
formatter.result({
  "duration": 7545178300,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Delete Account",
  "description": "",
  "id": "delete-account;delete-account",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I scroll down page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click loginAccountTab",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I scroll up page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click deleteAccount with userName",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I verify delete successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I log out",
  "keyword": "And "
});
formatter.match({
  "location": "CommonTest.scrollDown()"
});
formatter.result({
  "duration": 5312985800,
  "status": "passed"
});
formatter.match({
  "location": "CommonTest.clickLoginAccountTab()"
});
formatter.result({
  "duration": 3043471100,
  "status": "passed"
});
formatter.match({
  "location": "CommonTest.scrollUp()"
});
formatter.result({
  "duration": 3023501900,
  "status": "passed"
});
formatter.match({
  "location": "DeleteAccountTest.deleteAccountClick()"
});
formatter.result({
  "duration": 3387731500,
  "status": "passed"
});
formatter.match({
  "location": "DeleteAccountTest.verifyDeleteSuccessfully()"
});
formatter.result({
  "duration": 1052132300,
  "status": "passed"
});
formatter.match({
  "location": "CommonTest.clickLogoutButton()"
});
formatter.result({
  "duration": 2048676600,
  "status": "passed"
});
formatter.uri("managementAccounts/updateAccount.feature");
formatter.feature({
  "line": 1,
  "name": "Update Account",
  "description": "",
  "id": "update-account",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Update Account successfully",
  "description": "",
  "id": "update-account;update-account-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I scroll down page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click loginAccountTab",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I scroll up page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click updateAccount with userName need update",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I update account with firstName as\u003cfirstName\u003e, lastName as \u003clastName\u003e, role as \u003crole\u003e, userName as \u003cuserName\u003e, Password \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click summit update",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I verify successfully with firstName as\u003cfirstName\u003e, lastName as \u003clastName\u003e, role as \u003crole\u003e, userName as \u003cuserName\u003e, Password \u003cpassword\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I log out",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I login successfully as \u003cuserName\u003e and \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I log out",
  "keyword": "And "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "update-account;update-account-successfully;",
  "rows": [
    {
      "cells": [
        "firstName",
        "lastName",
        "role",
        "userName",
        "password"
      ],
      "line": 19,
      "id": "update-account;update-account-successfully;;1"
    },
    {
      "cells": [
        "lieu",
        "ngo",
        "Admin",
        "lieu.ngo",
        "123456"
      ],
      "line": 20,
      "id": "update-account;update-account-successfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Open website http://localhost:8080/demo/#!/",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I login successfully as admin and admin",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8080/demo/#!/",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 11212509200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 24
    },
    {
      "val": "admin",
      "offset": 34
    }
  ],
  "location": "CommonTest.loginSuccess(String,String)"
});
formatter.result({
  "duration": 7820438000,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Update Account successfully",
  "description": "",
  "id": "update-account;update-account-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I scroll down page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click loginAccountTab",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I scroll up page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click updateAccount with userName need update",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I update account with firstName aslieu, lastName as ngo, role as Admin, userName as lieu.ngo, Password 123456",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click summit update",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I verify successfully with firstName aslieu, lastName as ngo, role as Admin, userName as lieu.ngo, Password 123456",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I log out",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I login successfully as lieu.ngo and 123456",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I log out",
  "keyword": "And "
});
formatter.match({
  "location": "CommonTest.scrollDown()"
});
formatter.result({
  "duration": 5296315900,
  "status": "passed"
});
formatter.match({
  "location": "CommonTest.clickLoginAccountTab()"
});
formatter.result({
  "duration": 3062574900,
  "status": "passed"
});
formatter.match({
  "location": "CommonTest.scrollUp()"
});
formatter.result({
  "duration": 3026352800,
  "status": "passed"
});
formatter.match({
  "location": "UpdateAccountTest.clickUpdateButton()"
});
formatter.result({
  "duration": 2355239100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lieu",
      "offset": 34
    },
    {
      "val": "ngo",
      "offset": 52
    },
    {
      "val": "Admin",
      "offset": 65
    },
    {
      "val": "lieu.ngo",
      "offset": 84
    },
    {
      "val": "123456",
      "offset": 103
    }
  ],
  "location": "UpdateAccountTest.informationUpdateAccount(String,String,String,String,String)"
});
formatter.result({
  "duration": 2616668200,
  "status": "passed"
});
formatter.match({
  "location": "UpdateAccountTest.clickSummitUpdate()"
});
formatter.result({
  "duration": 2256312500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lieu",
      "offset": 39
    },
    {
      "val": "ngo",
      "offset": 57
    },
    {
      "val": "Admin",
      "offset": 70
    },
    {
      "val": "lieu.ngo",
      "offset": 89
    },
    {
      "val": "123456",
      "offset": 108
    }
  ],
  "location": "CommonTest.verifyAddAccountSuccessfully(String,String,String,String,String)"
});
formatter.result({
  "duration": 4072066400,
  "status": "passed"
});
formatter.match({
  "location": "CommonTest.clickLogoutButton()"
});
formatter.result({
  "duration": 2049594400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lieu.ngo",
      "offset": 24
    },
    {
      "val": "123456",
      "offset": 37
    }
  ],
  "location": "CommonTest.loginSuccess(String,String)"
});
formatter.result({
  "duration": 7464973100,
  "status": "passed"
});
formatter.match({
  "location": "CommonTest.clickLogoutButton()"
});
formatter.result({
  "duration": 2046056000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 22,
  "name": "Update Account unsuccessfully",
  "description": "",
  "id": "update-account;update-account-unsuccessfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "I scroll down page",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I click loginAccountTab",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I scroll up page",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click updateAccount with userName need update",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I update account with firstName as\u003cfirstName\u003e, lastName as \u003clastName\u003e, role as \u003crole\u003e, userName as \u003cuserName\u003e, Password \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click summit update",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I verify successfully with firstName as\u003cfirstName\u003e, lastName as \u003clastName\u003e, role as \u003crole\u003e, userName as \u003cuserName\u003e, Password \u003cpassword\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I log out",
  "keyword": "And "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "update-account;update-account-unsuccessfully;",
  "rows": [
    {
      "cells": [
        "firstName",
        "lastName",
        "role",
        "userName",
        "password"
      ],
      "line": 32,
      "id": "update-account;update-account-unsuccessfully;;1"
    },
    {
      "cells": [
        "",
        "ngo",
        "Admin",
        "thieu.ngo",
        "123456"
      ],
      "line": 33,
      "id": "update-account;update-account-unsuccessfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Open website http://localhost:8080/demo/#!/",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I login successfully as admin and admin",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8080/demo/#!/",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 5039849400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 24
    },
    {
      "val": "admin",
      "offset": 34
    }
  ],
  "location": "CommonTest.loginSuccess(String,String)"
});
formatter.result({
  "duration": 7449651900,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Update Account unsuccessfully",
  "description": "",
  "id": "update-account;update-account-unsuccessfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "I scroll down page",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I click loginAccountTab",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I scroll up page",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click updateAccount with userName need update",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I update account with firstName as, lastName as ngo, role as Admin, userName as thieu.ngo, Password 123456",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click summit update",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I verify successfully with firstName as, lastName as ngo, role as Admin, userName as thieu.ngo, Password 123456",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I log out",
  "keyword": "And "
});
formatter.match({
  "location": "CommonTest.scrollDown()"
});
formatter.result({
  "duration": 5274319200,
  "status": "passed"
});
formatter.match({
  "location": "CommonTest.clickLoginAccountTab()"
});
formatter.result({
  "duration": 3066839800,
  "status": "passed"
});
formatter.match({
  "location": "CommonTest.scrollUp()"
});
formatter.result({
  "duration": 3024442000,
  "status": "passed"
});
formatter.match({
  "location": "UpdateAccountTest.clickUpdateButton()"
});
formatter.result({
  "duration": 2377479600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 34
    },
    {
      "val": "ngo",
      "offset": 48
    },
    {
      "val": "Admin",
      "offset": 61
    },
    {
      "val": "thieu.ngo",
      "offset": 80
    },
    {
      "val": "123456",
      "offset": 100
    }
  ],
  "location": "UpdateAccountTest.informationUpdateAccount(String,String,String,String,String)"
});
formatter.result({
  "duration": 2544692400,
  "status": "passed"
});
formatter.match({
  "location": "UpdateAccountTest.clickSummitUpdate()"
});
formatter.result({
  "duration": 2033410300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 39
    },
    {
      "val": "ngo",
      "offset": 53
    },
    {
      "val": "Admin",
      "offset": 66
    },
    {
      "val": "thieu.ngo",
      "offset": 85
    },
    {
      "val": "123456",
      "offset": 105
    }
  ],
  "location": "CommonTest.verifyAddAccountSuccessfully(String,String,String,String,String)"
});
formatter.result({
  "duration": 4066448500,
  "status": "passed"
});
formatter.match({
  "location": "CommonTest.clickLogoutButton()"
});
formatter.result({
  "duration": 2047629800,
  "status": "passed"
});
formatter.uri("managementApplications/add_application.feature");
formatter.feature({
  "line": 1,
  "name": "Add Application",
  "description": "",
  "id": "add-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Add New Application Successfully",
  "description": "",
  "id": "add-application;add-new-application-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open website http://localhost:8080/demo/",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I login successfully as admin and admin",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I click management in sidebar",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click add application button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I input app name as \u003cappName\u003e session expiration as \u003cnumberSession\u003e user base as \u003cuserBase\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click create button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I verify that system add application successfully with app name as \u003cappName\u003e session expiration as \u003cnumberSession\u003e and user base as \u003cuserBase\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "add-application;add-new-application-successfully;",
  "rows": [
    {
      "cells": [
        "appName",
        "numberSession",
        "userBase"
      ],
      "line": 12,
      "id": "add-application;add-new-application-successfully;;1"
    },
    {
      "cells": [
        "cucumber-project",
        "3",
        "User By Session"
      ],
      "line": 13,
      "id": "add-application;add-new-application-successfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Add New Application Successfully",
  "description": "",
  "id": "add-application;add-new-application-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open website http://localhost:8080/demo/",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I login successfully as admin and admin",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I click management in sidebar",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click add application button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I input app name as cucumber-project session expiration as 3 user base as User By Session",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click create button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I verify that system add application successfully with app name as cucumber-project session expiration as 3 and user base as User By Session",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8080/demo/",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 6417780700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 24
    },
    {
      "val": "admin",
      "offset": 34
    }
  ],
  "location": "CommonTest.loginSuccess(String,String)"
});
formatter.result({
  "duration": 7503461200,
  "status": "passed"
});
formatter.match({
  "location": "CommonTest.clickSidebarItem()"
});
formatter.result({
  "duration": 3361762900,
  "status": "passed"
});
formatter.match({
  "location": "AddApplicationTest.clickAddAppButton()"
});
formatter.result({
  "duration": 3274615700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cucumber-project",
      "offset": 20
    },
    {
      "val": "3",
      "offset": 59
    },
    {
      "val": "User By Session",
      "offset": 74
    }
  ],
  "location": "AddApplicationTest.inputAppInformation(String,String,String)"
});
formatter.result({
  "duration": 6780456000,
  "status": "passed"
});
formatter.match({
  "location": "AddApplicationTest.clickCreateButton()"
});
formatter.result({
  "duration": 3248488200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cucumber-project",
      "offset": 67
    },
    {
      "val": "3",
      "offset": 106
    },
    {
      "val": "User By Session",
      "offset": 125
    }
  ],
  "location": "AddApplicationTest.verifyAddSuccessfully(String,String,String)"
});
formatter.result({
  "duration": 2095233200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "Add New Application Unsuccessfully",
  "description": "",
  "id": "add-application;add-new-application-unsuccessfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "I click add application button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I input app name as \u003cappName\u003e session expiration as \u003cnumberSession\u003e user base as \u003cuserBase\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click create button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I verify that system add application unsuccessfully with app name as \u003cappName\u003e session expiration as \u003cnumberSession\u003e and user base as \u003cuserBase\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "add-application;add-new-application-unsuccessfully;",
  "rows": [
    {
      "cells": [
        "appName",
        "numberSession",
        "userBase"
      ],
      "line": 21,
      "id": "add-application;add-new-application-unsuccessfully;;1"
    },
    {
      "cells": [
        "cucumber-project",
        "4",
        "User By Location Sharing"
      ],
      "line": 22,
      "id": "add-application;add-new-application-unsuccessfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 22,
  "name": "Add New Application Unsuccessfully",
  "description": "",
  "id": "add-application;add-new-application-unsuccessfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "I click add application button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I input app name as cucumber-project session expiration as 4 user base as User By Location Sharing",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click create button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I verify that system add application unsuccessfully with app name as cucumber-project session expiration as 4 and user base as User By Location Sharing",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AddApplicationTest.clickAddAppButton()"
});
formatter.result({
  "duration": 3268722400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cucumber-project",
      "offset": 20
    },
    {
      "val": "4",
      "offset": 59
    },
    {
      "val": "User By Location Sharing",
      "offset": 74
    }
  ],
  "location": "AddApplicationTest.inputAppInformation(String,String,String)"
});
formatter.result({
  "duration": 6641616000,
  "status": "passed"
});
formatter.match({
  "location": "AddApplicationTest.clickCreateButton()"
});
formatter.result({
  "duration": 3247984100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cucumber-project",
      "offset": 69
    },
    {
      "val": "4",
      "offset": 108
    },
    {
      "val": "User By Location Sharing",
      "offset": 127
    }
  ],
  "location": "AddApplicationTest.verifyAddUnsuccessfully(String,String,String)"
});
