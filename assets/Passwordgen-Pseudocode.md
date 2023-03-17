* Generate a password when the button is clicked
  * Present a series of prompts for password criteria
    1.  Length of password
    2. At least 8 characters but no more than 128.
    3. Character types     
    *  3.1 Lowercase
    *  3.2 Uppercase
    *  3.3 Numeric
    *  3.4 Special characters ($@%&*, etc)
  * 4. Code should validate (for each) input and at least one character type should be selected
  * 5.  Once prompts are answered then the password should be generated and displayed in an alert or written to the page
<br>
  ## PROMPTS
1. 
 * "Please select a password length between 8 and 128 characters."

 *  If a number between 8 and 128 characters is selected then... see 2.
 *  If no number between 8 and 128 characters is selected then... "Please select a number between 8 to 128."

2. 
 * Do you want to include lowercase characters?...T/F
 * Do you want to include uppercase characters?...T/F
 * Do you want to include numeric characters?...T/F
 * Do you want to include special characters?...T/F

3. 
* Code should validate (for each) input, and at least one character type should be selected

*If 'False' selected for all options in 2. then...alert "At least one character type must be selected to generate a password".

4.  
* Once prompts are answered then the password should be generated and displayed in an alert or written to the page
<br>
<br> 

## GENERATE PASSWORD
Get an index from
* Lowercase
* Uppercase
* Numeric
* Special characters
