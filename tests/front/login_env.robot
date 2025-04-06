*** Settings ***
Library     Browser    auto_closing_level=KEEP
Variables   load_env.py

*** Test Cases ***
Kirjaudu sisään käyttäen .env-tiedostoa
    New Browser    chromium    headless=No  
    New Page       http://localhost:5173/ 
    Get Title      ==    Kirjautuminen  
    Type Text      [name="username"]    ${Username}    delay=0.1s 
    Type Secret    [name="password"]    $Password    delay=0.1s
    Click          input[type="submit"]
    Sleep          2s
