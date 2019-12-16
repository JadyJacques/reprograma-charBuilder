define({ "api": [
  {
    "type": "get",
    "url": "/",
    "title": "",
    "group": "Inicio",
    "success": {
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n  title: \"Reprograma Projeto Char Builder\",\n  version: \"0.0.1\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/index.js",
    "groupTitle": "Inicio",
    "name": "Get"
  },
  {
    "type": "put",
    "url": "/personagens/:nickname",
    "title": "",
    "name": "Atualizar_personagem",
    "group": "Personagens",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Personagem",
            "optional": false,
            "field": "Personagens",
            "description": "<p>Lista de personagens</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/personagensRoute.js",
    "groupTitle": "Personagens"
  },
  {
    "type": "post",
    "url": "/personagens",
    "title": "",
    "name": "Criar_Personagem",
    "group": "Personagens",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Personagem",
            "optional": false,
            "field": "Personagens",
            "description": "<p>Lista de personagens</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/personagensRoute.js",
    "groupTitle": "Personagens"
  },
  {
    "type": "delete",
    "url": "/personagens/:nickname",
    "title": "",
    "name": "Deletar_Personagem",
    "group": "Personagens",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Personagem",
            "optional": false,
            "field": "Personagens",
            "description": "<p>Lista de personagens</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/personagensRoute.js",
    "groupTitle": "Personagens"
  },
  {
    "type": "get",
    "url": "/personagens/filterByClass/:classe",
    "title": "",
    "name": "Filtar_pela_classe",
    "group": "Personagens",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Personagens",
            "description": "<p>Lista de personagens</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/personagensRoute.js",
    "groupTitle": "Personagens"
  },
  {
    "type": "get",
    "url": "/personagens/:nickname",
    "title": "",
    "name": "Filtar_pelo_nickname",
    "group": "Personagens",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Personagem",
            "optional": false,
            "field": "Personagem",
            "description": "<p>Personagem com nickname</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/personagensRoute.js",
    "groupTitle": "Personagens"
  },
  {
    "type": "get",
    "url": "/personagens",
    "title": "Listar personagens",
    "name": "Listar",
    "group": "Personagens",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Personagens",
            "description": "<p>Lista de todos personagens</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"Você saiu do sistema!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/personagensRoute.js",
    "groupTitle": "Personagens"
  }
] });
