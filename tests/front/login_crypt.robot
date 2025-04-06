*** Settings ***
Library           Browser
Library           CryptoLibrary    variable_decryption=True

*** Variables ***
${Username}    crypt:6NJUXS99VoFA7NQkeM0ROiNc3zl82kJ8abHrESoNQhW4WvKPxcO4kgPfL3qyf5tHuCHJ9KHFN8SB3hFg
${Password}    crypt:Kh9NQUZkuIZhMIVba9V8SDcCozHmUP50az1qPIab5QAEOvc5jYmG8xOipxjeSLUGyozZT6wXoSlF

*** Test Cases ***
Kirjautuminen Kryptatuilla Tiedoilla
    New Browser    chromium    headless=false
    New Page       http://localhost:5173/
    Fill Text      input[name="username"]    ${Username}
    Fill Text      input[name="password"]    $Password
    Click          input[type="submit"]
    Sleep          2s
