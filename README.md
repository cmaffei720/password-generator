# password-generator

Create a password generator that asks for:
-Password length between 8 and 128 characters. If outside of limit or invalid input, return error
-Do we want password to include lower case characters?
-Do we want password to include upper case characters?
-Do we want password to include numbers?
-Do we want password to include special characters?
Based on input, generate a random password to meet criteria

**This was done based on a binomial tree - all possible outcomes of 1. T/F, 2. T/F, 3. T/F, 4. T/F

1. variables created for passwordLength, and boolens for lowercase, uppercase, number, special characters
** screenshot 1** src = variable_creation_conditionals.png

2. arrays created for lowercase, uppercase, numericals, LowerNumber, UpperNumber, LowerUpper, LowerUpperNumber
*screenshot 2 ** arrays for lowercase letters, uppercase letters, numbers

3. functions to create random special characters
*screenshot 3 ** function to generate random special characters

4. 15 total if/else statements, based on binomial trees for all possible T/F combos on 4 questions (16th possibility, FFFF, returns an error)'
*screenshot 4 ** if and else statements beginning

5. End result
screenshot end result
