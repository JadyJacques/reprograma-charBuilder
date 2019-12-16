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
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n \"message\": \"darkj foi atualizado!\"\n }",
          "type": "json"
        }
      ]
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
    "title": "Filtrar pelo nickname",
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
          "content": "   HTTP/1.1 200 OK\n   [\n{\n\"_id\": \"5df766106623fd1b3c71cd95\",\n\"nickname\": \"aragantinis\",\n\"faccao\": \"alianca\",\n\"raca\": \"humano\",\n\"genero\": \"male\",\n\"classe\": \"mage\",\n\"level\": 30,\n\"__v\": 0\n},\n{\n\"_id\": \"5df7a91cf8798a27284e5039\",\n\"nickname\": \"darkj\",\n\"faccao\": \"alianca\",\n\"raca\": \"draenei\",\n\"genero\": \"female\",\n\"classe\": \"xamã\",\n\"level\": 85,\n\"__v\": 0\n},\n{\n\"_id\": \"5df7a939f8798a27284e503a\",\n\"nickname\": \"jerrik\",\n\"faccao\": \"alianca\",\n\"raca\": \"humano\",\n\"genero\": \"male\",\n\"classe\": \"paladin\",\n\"level\": 85,\n\"__v\": 0\n},\n{\n\"_id\": \"5df7a95bf8798a27284e503b\",\n\"nickname\": \"zero\",\n\"faccao\": \"horda\",\n\"raca\": \"elfo sangrento\",\n\"genero\": \"male\",\n\"classe\": \"paladin\",\n\"level\": 85,\n\"__v\": 0\n},\n{\n\"_id\": \"5df7a971f8798a27284e503c\",\n\"nickname\": \"natpoison\",\n\"faccao\": \"horda\",\n\"raca\": \"elfo sangrento\",\n\"genero\": \"female\",\n\"classe\": \"warlock\",\n\"level\": 85,\n\"__v\": 0\n},\n{\n\"_id\": \"5df7a98bf8798a27284e503d\",\n\"nickname\": \"flafuh\",\n\"faccao\": \"alianca\",\n\"raca\": \"elfo noturno\",\n\"genero\": \"female\",\n\"classe\": \"druid\",\n\"level\": 72,\n\"__v\": 0\n},\n{\n\"_id\": \"5df7a9d4f8798a27284e503e\",\n\"nickname\": \"scarmoon\",\n\"faccao\": \"alianca\",\n\"raca\": \"human\",\n\"genero\": \"female\",\n\"classe\": \"death knight\",\n\"level\": 80,\n\"__v\": 0\n},\n{\n\"_id\": \"5df7a9eef8798a27284e503f\",\n\"nickname\": \"paladinex\",\n\"faccao\": \"alianca\",\n\"raca\": \"human\",\n\"genero\": \"male\",\n\"classe\": \"paladin\",\n\"level\": 85,\n\"__v\": 0\n},\n{\n\"_id\": \"5df7aa07f8798a27284e5040\",\n\"nickname\": \"ruto\",\n\"faccao\": \"alianca\",\n\"raca\": \"human\",\n\"genero\": \"female\",\n\"classe\": \"priest\",\n\"level\": 85,\n\"__v\": 0\n},\n{\n\"_id\": \"5df7aa26f8798a27284e5041\",\n\"nickname\": \"sylvannas\",\n\"faccao\": \"horda\",\n\"raca\": \"elfo sangrento\",\n\"genero\": \"female\",\n\"classe\": \"hunter\",\n\"level\": 85,\n\"__v\": 0\n},\n{\n\"_id\": \"5df7aa40f8798a27284e5042\",\n\"nickname\": \"jaina\",\n\"faccao\": \"aliaca\",\n\"raca\": \"human\",\n\"genero\": \"female\",\n\"classe\": \"mage\",\n\"level\": 85,\n\"__v\": 0\n}\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/personagensRoute.js",
    "groupTitle": "Personagens"
  }
] });
