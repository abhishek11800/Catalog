This project solves Shamir's Secret Sharing problem using Lagrange Interpolation. You are given roots of a polynomial encoded in various bases, and the goal is to decode these values and find the constant term (secret) of the polynomial.

Steps:

Input Files: Two JSON files contain the roots (x, y) of the polynomial. x is the key, and y is encoded in a specific base.

Decode Values: Decode y from its respective base (e.g., base 2, base 10) to get the actual y values.

Lagrange Interpolation: Use these decoded (x, y) pairs to apply Lagrange Interpolation and compute the constant term (secret).

Output: Print the secret for each test case.
Code:

testcase1.json and testcase2.json store the roots and their encoded values.
solution.js reads the files, decodes the values, and computes the secret using Lagrange interpolation.

Output Example:

Secret for Test Case 1: 3
Secret for Test Case 2: 79836264046592

This method allows you to reconstruct the polynomial and find the secret from the roots.
