01. ## Test case: Sucessfull Login

- **Test Case ID:** TC-001
- **Objective:** Login with valid email and password.
- **Preconditions:** Have an email registered in the system and a wrong password.
- **Steps for Execution:**
    1. Access cy.heroes.
    2. Click login.
    3. Put a valid email.
    4. Put a valid password.
    5. Click sign in.
- **Expected Result:** Successful Login.
- **Feature Tested:** Login
- **Test Environment:** Google Chrome
- **Results Found:** Same as the expected result.
- **Status:** Approved

02. ## Test case: Login with wrong email formatting

- **Test Case ID:** TC-002
- **Objective:** Log in with the wrongly formatted email and valid password.
- **Preconditions:** Have an incorrectly formatted email and password registered in the system.
- **Steps for Execution:**
    1. Access cy.heroes.
    2. Click login.
    3. Put a incorrectly formatted email.
    4. Put a valid password.
    5. Click sign in.
- **Expected Result:** Receive the message "Email is not valid".
- **Feature Tested:** Login
- **Test Environment:** Google Chrome
- **Results Found:** Same as the expected result.
- **Status:** Approved

03. ## Test case: Login with wrong password
- **Test Case ID:** TC-003
- **Objective:** Login with valid email and a wrong password.
- **Preconditions:** Have an incorrectly formatted email and password registered in the system.
- **Steps for Execution:**
    1. Access cy.heroes.
    2. Click login.
    3. Put a valid email.
    4. Put a wrong password.
    5. Click sign in.
- **Expected Result:** Receive the message "Invalid email or password.
- **Feature Tested:** Login
- **Test Environment:** Google Chrome
- **Results Found:** Same as the expected result.
- **Status:** Approved  Checks hero interaction buttons functionality'

04. ## Test case: Checking the functionality of the like button
- **Test Case ID:** TC-004
- **Objective:** Checking the functionality of the like button
- **Preconditions:** Have access to the system and be using it.
- **Steps for Execution:**
    1. Access cy.heroes.
    2. Click login.
    3. Put a valid email.
    4. Put a valid password.
    5. Click sign in.
    6. Click on the like button. 
- **Expected Result:** The like button works perfectly
- **Feature Tested:** Login
- **Test Environment:** Google Chrome
- **Results Found:** Same as the expected result.
- **Status:** Approved  

05. ## Test case: Checking the functionality of the hire button
- **Test Case ID:** TC-005
- **Objective:** Checking the functionality of the hire button, when I accept the hire and when I deny the hire
- **Preconditions:** Have access to the system and be using it.
- **Steps for Execution:**
    1. Access cy.heroes.
    2. Click login.
    3. Put a valid email.
    4. Put a valid password.
    5. Click sign in.
    6. Click on the hire button.
    7. Click on the yes or no button.
- **Expected Result:** The hire button works perfectly
- **Feature Tested:** Login
- **Test Environment:** Google Chrome
- **Results Found:** Same as the expected result.
- **Status:** Approved  

06. ## Test case: Checking the functionality of the edit button
- **Test Case ID:** TC-006
- **Objective:** Checking the functionality of the edit button.
- **Preconditions:** Have access to the system and be using it.
- **Steps for Execution:**
    1. Access cy.heroes.
    2. Click login.
    3. Put a valid email.
    4. Put a valid password.
    5. Click sign in.
    6. Click on the edit button.
- **Expected Result:** The edit button works perfectly and returns you to the edit screen.
- **Feature Tested:** Login
- **Test Environment:** Google Chrome
- **Results Found:** Same as the expected result.
- **Status:** Approved  

07. ## Test case: Editing name of the hero
- **Test Case ID:** TC-007
- **Objective:** Change the name of the hero.
- **Preconditions:** Have access to the system, use it and access a hero's editing page.
- **Steps for Execution:**
    1. Access cy.heroes.
    2. Click login.
    3. Put a valid email.
    4. Put a valid password.
    5. Click sign in.
    6. Click on the edit button.
    7. Edit the name field.
    8. Click on submit button
- **Expected Result:** The change was saved successfully.
- **Feature Tested:** Login
- **Test Environment:** Google Chrome
- **Results Found:** Same as the expected result.
- **Status:** Approved  

08. ## Test case: Editing price of the hero
- **Test Case ID:** TC-008
- **Objective:** Change the price of the hero.
- **Preconditions:** Have access to the system, use it and access a hero's editing page.
- **Steps for Execution:**
    1. Access cy.heroes.
    2. Click login.
    3. Put a valid email.
    4. Put a valid password.
    5. Click sign in.
    6. Click on the edit button.
    7. Edit the price field.
    8. Click on submit button
- **Expected Result:** The change was saved successfully.
- **Feature Tested:** Login
- **Test Environment:** Google Chrome
- **Results Found:** Same as the expected result.
- **Status:** Approved

09. ## Test case: Editing fans of the hero
- **Test Case ID:** TC-009
- **Objective:** Change the fans of the hero.
- **Preconditions:** Have access to the system, use it and access a hero's editing page.
- **Steps for Execution:**
    1. Access cy.heroes.
    2. Click login.
    3. Put a valid email.
    4. Put a valid password.
    5. Click sign in.
    6. Click on the edit button.
    7. Edit the fans field.
    8. Click on submit button
- **Expected Result:** The change was saved successfully.
- **Feature Tested:** Login
- **Test Environment:** Google Chrome
- **Results Found:** Same as the expected result.
- **Status:** Approved 

10. ## Test case: Editing saves of the hero
- **Test Case ID:** TC-010
- **Objective:** Change the saves of the hero.
- **Preconditions:** Have access to the system, use it and access a hero's editing page.
- **Steps for Execution:**
    1. Access cy.heroes.
    2. Click login.
    3. Put a valid email.
    4. Put a valid password.
    5. Click sign in.
    6. Click on the edit button.
    7. Edit the saves field.
    8. Click on submit button
- **Expected Result:** The change was saved successfully.
- **Feature Tested:** Login
- **Test Environment:** Google Chrome
- **Results Found:** Same as the expected result.
- **Status:** Approved 

11. ## Test case: Delete the hero
- **Test Case ID:** TC-011
- **Objective:** Delete the hero
- **Preconditions:** Have access to the system and be using it.
- **Steps for Execution:**
    1. Access cy.heroes.
    2. Click login.
    3. Put a valid email.
    4. Put a valid password.
    5. Click sign in.
    6. Click on the delete button.
- **Expected Result:** successfully delete the hero
- **Feature Tested:** Login
- **Test Environment:** Google Chrome
- **Results Found:** Same as the expected result.
- **Status:** Approved  