*** Settings ***
Library     Browser    auto_closing_level=KEEP
Resource    Keywords.robot  

*** Variables ***
${MOOD}            "Iloinen"
${WEIGHT}          81
${SLEEP_HOURS}     8
${NOTES}           "Viimeine testi!"
${DATE}            2024-03-30  

*** Test Cases ***
Lisää uusi päiväkirjamerkintä
    New Browser    chromium    headless=No  
    New Page       http://localhost:5173/

    # Kirjaudu sisään
    Get Title                     ==    Kirjautuminen  
    Type Text                      [name="username"]    ${username}    delay=0.1s 
    Type Secret                    [name="password"]    $password    delay=0.1s
    Click                          input[type="submit"]
    Sleep                          2s    

    # Siirry päiväkirjamerkintöihin
    Click                          text="Uusi Merkintä"
    Wait For Elements State        text="Tee päiväkirja merkintä"    visible  

    # Täytä lomake
    Fill Text                      id=entry_date        ${DATE}
    Fill Text                      id=mood             ${MOOD}
    Fill Text                      id=weight           ${WEIGHT}
    Fill Text                      id=sleep_hours      ${SLEEP_HOURS}
    Fill Text                      id=notes            ${NOTES}
    
    # Lähetä lomake
    Click                          input[type="submit"]
    Sleep                          2s   

    Close Browser