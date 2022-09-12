import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  fallbackLng: "pt-BR",
  lng: "pt-BR",
  resources: {
    "pt-BR": {
      translation: {
        login: {
          title: "Login",
          email: {
            placeholder: "endereço de e-mail",
            validation: {
              required: "Campo obrigatório",
            },
            verificationEmail: {
              title: "Cheque seu e-mail!",
              body: "Um link mágico para login acaba de ser enviado!",
              error:
                "Houve um erro ao enviar o link. Tente novamente mais tarde.",
            },
            button: "Entrar com e-mail",
          },
        },
        header: {
          imgDescricao: "Logotipo do MeRepresenta",
          navbar: {
            sobre: "Sobre",
            voluntaria: "Voluntária/o",
            eleitora: "Eleitor/a",
            pautas: "Pautas",
            perguntas: "Perguntas?",
            candidata: "Sou Candidata/o",
            menu: "Clique para {{estado}} o menu",
            menuAbrir: "abrir",
            menuFechar: "fechar",
            auth: {
              profile: "Editar perfil",
              logout: "Sair",
            },
          },
        },
        footer: {
          sobre: {
            titulo: "Sobre",
            quemSomos: "Quem somos",
            impacto: "Impacto",
            transparencia: "Transparência",
          },
          participar: {
            titulo: "Participar",
            candidato: "Candidato",
            eleitor: "Eleitor",
            voluntario: "Voluntário",
          },
          financiamento: {
            titulo: "Financiamento",
            iniciativa: "uma iniciativa de",
            imgsAlt: {
              ciudadania: "Ciudadania Inteligente",
              altec: "Uma iniciativa de Altec",
              undef: "Undef",
              avina: "Avina",
              omidyar: "Omidyar",
            },
          },
          apoio: {
            titulo: "Apoio",
            imgsAlt: {
              zoly: "Saiba Mais Zoly",
              mattos: "Mattos Filho",
              silveira: "Silveira Andrade",
              casa1: "Casa 1",
              tiniguimaraes: "Tini e Guimarães",
              dataLabel: "Data Label",
            },
          },
          direitos: {
            titulo: "#Todos os direitos reservados a #MeRepresenta 2022",
          },
        },
        home: {
          ajudeEleitores: {
            titulo: "Ajude seus eleitores chegarem até você!",
            querAparecer:
              "Quer aparecer para as eleitoras e eleitores que se preocupam com as mesmas pautas que você? Cadastre-se e traga mais visibilidade para sua candidatura.",
            btnSouCandidato: "Sou candidata/o",
            btnSouVoluntario: "Quero ser voluntária/o",
            btnSouEleitor: "Sou eleitor/a",
            imgDescricao:
              "Eleitores diversos com balões de fala dizendo 'voto!' e '#me representa'",
          },
          conheca: {
            titulo: "Conheça o #MeRepresenta",
            oMeRepresenta:
              "O #MeRepresenta é uma união de coletivos formados por mulheres, pessoas negras e LGBT+. Nosso objetivo é diminuir a distância entre eleitoras/es e candidatas/os comprometidas/os com os direitos sociais, civis e políticos da população.",
            aNovaPlataforma:
              "A nova plataforma #MeRepresenta Eleições 2020 foi elaborada com a participação de 16 organizações da sociedade civil. Veja abaixo quem está com a gente!",
          },
          pautas: {
            titulo: "Entenda as #pautas em debate",
            genero: "#Gênero",
            lgbt: "#LGBT+",
            raca: "#Raça",
            povos: "#Povos Tradicionais",
            politicasSociais: "#Políticas Sociais",
            segurancaPublica: "#Segurança Pública",
            drogas: "#Drogas",
            comunicacao: "#Comunicação",
            demoracracia: "#Democracia",
            meioAmbiente: "#Meio Ambiente",
            imgsAlt: {
              raca: "Pessoas negras marcham com punho erguido e sorrindo",
              povos: "Indigenas com os corpos pintados em protesto",
              lgbt: "Bandeira do movimento LGBT+ balançada em frente a grande público em passeata",
            },
          },
          facaParte: {
            titulo: "Faça parte do #MeRepresenta",
            btnVoluntario: "Quero ser voluntario",
            btnSaberMais: "Quero saber mais",
            imgDescricao:
              "Ilustração com 3 pessoas com balões de fala dizendo '#me representa'",
          },
          quemFez: {
            titulo: "Quem fez isso possível?",
            imgsAlt: {
              mulheresNegras:
                "Logo com a frase 'mulheres negras decidem' em maiusculas",
              blogueirasNegras:
                "Logo com uma mulher negra a esquerda em fundo amarelo e o título 'Blogueiras Negras'",
              redeFeminista:
                "Logo com uma arte em linhas finas e o título 'Rede Feminista de Juristas'",
              cidadaniaInteligente:
                "Logo com uma arte de uma lâmpada e pontos coloridos com o título 'Cidadania Inteligente'",
              voteLGBT: "Logo com o título '#VoteLGBT'",
            },
          },
          parcerias: {
            titulo: "Parcerias",
            imgsAlt: {
              agblt:
                "Logotipo da Associação Brasileira de Gays, Lésbicas, Bissexuais, Travestis, Transexuais e Intersexos",
              aliancaNacionalLGBTI: "Logotipo da Aliança Nacional LGBTI+",
              apoinme:
                "Logotipo da Articulação dos Povos Indígenas do Nordeste, Minas Gerais e Espírito Santo (APOINME)",
              cfemea: "Logotipo do Centro Feminista de Estudos e Assessoria",
              conaq:
                "Logotipo da Coordenação Nacional de Articulação de Quilombos",
              gn: "Logotipo da orgnização Gênero e Número",
              instutoSouDaPaz: "Logotipo do Instituto Sou da Paz",
              intervozes: "Logotipo da Intervozes",
              ittc: "Logotitpo do Instituto Terra, Trabalho e Cidadania - ITTC",
              mst: "Logotipo do Movimento dos Trabalhadores Rurais Sem Terra",
              pbpd: "Logotipo da Plataforma Brasileira de Política de Drogas (PBPD)",
              sistemaPolitico:
                "Logotipo da Plataforma pela reforma do sistema político",
              redeJusticaCriminal: "Logotipo da Rede Justiça Criminal",
              azMina: "Logotipo do instituto AzMina",
              movimentoTransparencia:
                "Logotipo do Movimento Transparência Partidária",
              monabot: "Logotipo da M0na Bot",
            },
          },
        },
      },
    },
  },
});

export default i18n;
