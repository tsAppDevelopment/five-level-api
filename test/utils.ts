import btoa from 'btoa'

const role0 = {
  "exp": 1602735212,
    "iat": 1602734312,
    "auth_time": 1602731339,
    "jti": "######-####-####",
    "iss": "https://login.dsop.io/auth/realms/baby-yoda",
    "sub": "######-####-####",
    "typ": "Bearer",
    "azp": "platform1_a8604cc9-f5e9-4656-802d-d05624370245_hello-world-authservice",
    "nonce": "###################",
    "session_state": "######-####-####",
    "acr": "0",
    "scope": "#### ######",
    "group-simple": [
        "#########",
        "#######",
        "####"
    ],
    "preferred_username": "real-john-doe",
    "given_name": "Bob",
    "activecac": "",
    "affiliation": "US Air Force",
    "group-full": [
        "##########/########/#########",
        "##########/########/#######",
        "##########/########/####"
    ],
    "organization": "Platform One",
    "name": "Bob Dylan",
    "nickname": "Cool Nickname",
    "usercertificate": "##################",
    "rank": "A1C",
    "position": "Peasant",
    "family_name": "Dylan",
    "email": "role0@test.com"
}

const role1 = {
  "exp": 1602735212,
    "iat": 1602734312,
    "auth_time": 1602731339,
    "jti": "######-####-####",
    "iss": "https://login.dsop.io/auth/realms/baby-yoda",
    "sub": "######-####-####",
    "typ": "Bearer",
    "azp": "platform1_a8604cc9-f5e9-4656-802d-d05624370245_hello-world-authservice",
    "nonce": "###################",
    "session_state": "######-####-####",
    "acr": "0",
    "scope": "#### ######",
    "group-simple": [
        "#########",
        "#######",
        "####"
    ],
    "preferred_username": "real-john-doe",
    "given_name": "Bob",
    "activecac": "",
    "affiliation": "US Air Force",
    "group-full": [
        "##########/########/#########",
        "##########/########/#######",
        "##########/########/####"
    ],
    "organization": "Platform One",
    "name": "Bob Dylan",
    "nickname": "Cool Nickname",
    "usercertificate": "##################",
    "rank": "A1C",
    "position": "Peasant",
    "family_name": "Dylan",
    "email": "role1@test.com"
}

const role2 = {
  "exp": 1602735212,
    "iat": 1602734312,
    "auth_time": 1602731339,
    "jti": "######-####-####",
    "iss": "https://login.dsop.io/auth/realms/baby-yoda",
    "sub": "######-####-####",
    "typ": "Bearer",
    "azp": "platform1_a8604cc9-f5e9-4656-802d-d05624370245_hello-world-authservice",
    "nonce": "###################",
    "session_state": "######-####-####",
    "acr": "0",
    "scope": "#### ######",
    "group-simple": [
        "#########",
        "#######",
        "####"
    ],
    "preferred_username": "real-john-doe",
    "given_name": "Bob",
    "activecac": "",
    "affiliation": "US Air Force",
    "group-full": [
        "##########/########/#########",
        "##########/########/#######",
        "##########/########/####"
    ],
    "organization": "Platform One",
    "name": "Bob Dylan",
    "nickname": "Cool Nickname",
    "usercertificate": "##################",
    "rank": "A1C",
    "position": "Peasant",
    "family_name": "Dylan",
    "email": "role2@test.com"
}
const role2OnAir1 = {
    "exp": 1602735212,
      "iat": 1602734312,
      "auth_time": 1602731339,
      "jti": "######-####-####",
      "iss": "https://login.dsop.io/auth/realms/baby-yoda",
      "sub": "######-####-####",
      "typ": "Bearer",
      "azp": "platform1_a8604cc9-f5e9-4656-802d-d05624370245_hello-world-authservice",
      "nonce": "###################",
      "session_state": "######-####-####",
      "acr": "0",
      "scope": "#### ######",
      "group-simple": [
          "#########",
          "#######",
          "####"
      ],
      "preferred_username": "real-john-doe",
      "given_name": "Bob",
      "activecac": "",
      "affiliation": "US Air Force",
      "group-full": [
          "##########/########/#########",
          "##########/########/#######",
          "##########/########/####"
      ],
      "organization": "Platform One",
      "name": "Bob Dylan",
      "nickname": "Cool Nickname",
      "usercertificate": "##################",
      "rank": "A1C",
      "position": "Peasant",
      "family_name": "Dylan",
      "email": "role2OnAir1@test.com"
  }

const role3 = {
  "exp": 1602735212,
    "iat": 1602734312,
    "auth_time": 1602731339,
    "jti": "######-####-####",
    "iss": "https://login.dsop.io/auth/realms/baby-yoda",
    "sub": "######-####-####",
    "typ": "Bearer",
    "azp": "platform1_a8604cc9-f5e9-4656-802d-d05624370245_hello-world-authservice",
    "nonce": "###################",
    "session_state": "######-####-####",
    "acr": "0",
    "scope": "#### ######",
    "group-simple": [
        "#########",
        "#######",
        "####"
    ],
    "preferred_username": "real-john-doe",
    "given_name": "Bob",
    "activecac": "",
    "affiliation": "US Air Force",
    "group-full": [
        "##########/########/#########",
        "##########/########/#######",
        "##########/########/####"
    ],
    "organization": "Platform One",
    "name": "Bob Dylan",
    "nickname": "Cool Nickname",
    "usercertificate": "##################",
    "rank": "A1C",
    "position": "Peasant",
    "family_name": "Dylan",
    "email": "role3@test.com"
}

const role4 = {
  "exp": 1602735212,
    "iat": 1602734312,
    "auth_time": 1602731339,
    "jti": "######-####-####",
    "iss": "https://login.dsop.io/auth/realms/baby-yoda",
    "sub": "######-####-####",
    "typ": "Bearer",
    "azp": "platform1_a8604cc9-f5e9-4656-802d-d05624370245_hello-world-authservice",
    "nonce": "###################",
    "session_state": "######-####-####",
    "acr": "0",
    "scope": "#### ######",
    "group-simple": [
        "#########",
        "#######",
        "####"
    ],
    "preferred_username": "real-john-doe",
    "given_name": "Bob",
    "activecac": "",
    "affiliation": "US Air Force",
    "group-full": [
        "##########/########/#########",
        "##########/########/#######",
        "##########/########/####"
    ],
    "organization": "Platform One",
    "name": "Bob Dylan",
    "nickname": "Cool Nickname",
    "usercertificate": "##################",
    "rank": "A1C",
    "position": "Peasant",
    "family_name": "Dylan",
    "email": "role4@test.com"
}





export const role0e = "Bearer fakestuff." + btoa(JSON.stringify(role0))
export const role1e = "Bearer fakestuff." + btoa(JSON.stringify(role1))
export const role2e = "Bearer fakestuff." + btoa(JSON.stringify(role2))
export const role3e = "Bearer fakestuff." + btoa(JSON.stringify(role3))
export const role4e = "Bearer fakestuff." + btoa(JSON.stringify(role4))
export const role2OnAir1e = "Bearer fakestuff." + btoa(JSON.stringify(role2OnAir1))

