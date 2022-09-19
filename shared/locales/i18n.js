import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import login from "./pt-BR/candidato/login.json";
import home from "./pt-BR/home.json";
import terms from "./pt-BR/terms.json";
import cadastro from "./pt-BR/candidato/cadastro.json";
import wizard from "./pt-BR/wizard.json";
import eleitores from "./pt-BR/eleitores.json";

export const validation = {
  required: "Campo obrigatório",
  cpf: "CPF inválido",
  email: "Insira um e-mail válido",
  length: "Formato inválido",
}

i18n.use(initReactI18next).init({
	fallbackLng: "pt-BR",
	lng: "pt-BR",
	resources: {
		"pt-BR": {
			translation: {
        cadastro: {
          ...cadastro,
          validation,
        },
        login: {
          ...login,
          validation,
        },
        wizard,
        home,
        eleitores,
        terms,
        global: {
          contador: "Pauta {{current}} de {{max}}",
          posicionamento: "Qual o seu posicionamento?",
        },
        header: {
          imgDescricao: "Logotipo do MeRepresenta",
          navbar: {
            home: "Home",
            voluntaria: "Voluntária/o",
            eleitora: "Eleitor/a",
            perguntas: "Perguntas?",
            candidata: "Sou Candidata/o",
            menu: "Clique para {{estado}} o menu",
            menuAbrir: "abrir",
            menuFechar: "fechar",
            auth: {
              profile: "Editar perfil",
              logout: "Sair",
              pautas: "Pautas",
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
        candidato: {
          titulo: "Pautas #MeRepresenta",
          perguntas: {
            contador: "Pauta {{current}} de {{max}}",
            posicionamento: "Qual o seu posicionamento?",
            genero: {
              titulo: "#Gênero",
              aborto: {
                label: "Aborto legal e seguro no SUS",
                pergunta: "O aborto é um direito de qualquer pessoa gestante no Brasil, desde 1940, quando a sua vida está em risco com a gravidez ou quando ela é resultado de um estupro e, desde 2012, também é possível quando o feto não tiver um cérebro formado. Nestes casos, não é preciso realizar Boletim de Ocorrência, nem ter autorização da justiça. Qualquer hospital do SUS que tenha serviço de ginecologia e obstetrícia deveria realizar o aborto legal e seguro. Mas este direito não está sendo garantido no SUS - dos 126 hospitais de referência no país, apenas 42 estão realizando o serviço em 2020.",
                info: "Conheça os hospitais que estão atendendo em 2020 e o Mapa do Aborto Legal, elaborados pela Gênero e Número e Revista AzMina.",
                labelAFavor: "Sou a FAVOR do aborto legal e seguro no SUS",
                labelContra: "Sou CONTRA do aborto legal e seguro no SUS",
              },
              delegacia: {
                label: "Delegacias da Mulher 24h para mulheres cis e trans",
                pergunta: "Durante a pandemia, as denúncias de violência contra a mulher na Central de Atendimento à Mulher (Ligue 180) aumentaram 40% e os casos de feminicídio aumentaram 22%. Mas em 2019, apenas 21 Delegacias da Mulher funcionavam 24h em todo país. Poucos estados permitem Boletim de Ocorrência de violência doméstica pela internet. E a maioria das Delegacias da Mulher não atende mulheres trans.",
                info: "Conheça os serviços públicos de enfrentamento da violência contra mulher no Brasil no Mapa do Acolhimento.",
                labelAFavor: "Sou a FAVOR das Delegacias da Mulher 24h para mulheres cis e trans",
                labelContra: "Sou CONTRA as Delegacias da Mulher 24h para mulheres cis e trans"
              },
              banheiro: {
                label: "Trans, travestis e pessoas não-binárias usarem o banheiro que escolherem",
                pergunta: "A população trans, travesti e não-binária é frequentemente impedida de usar banheiros de acordo com sua identidade de gênero. Desde 2015, o tema está no Supremo Tribunal Federal e dois ministros já disseram que são a favor de poderem escolher qual banheiro usar. Mas há 5 anos o ministro Fux, atual presidente do STF, interrompeu o julgamento dizendo que precisava de tempo para pensar no assunto.",
                info: "Saiba mais sobre o assunto neste vídeo e nesta reportagem.",
                labelAFavor: "Sou a FAVOR de trans, travestis e pessoas não-binárias usarem o banheiro que escolherem",
                labelContra: "Sou CONTRA trans, travestis e pessoas não-binárias usarem o banheiro que escolherem"
              }
            },
            LGBTQ: {
              titulo: "#LGBTQIP+",
              cirurgia: {
                label: "Cirurgia genital em crianças intersexo por motivo estético",
                pergunta: "Crianças intersexo estão passando por cirurgias porque seus pais e médicos estão definindo qual sexo deveriam ter, apenas por motivos estéticos. Cerca de 1% da população do mundo é intersexo, pois tem uma genitália, órgãos reprodutores ou cromossomos que não se encaixam inteiramente na definição típica de masculino ou feminino. A maioria destas cirurgias não é de emergência e nem tem motivos médicos, pois são crianças saudáveis. Após a cirurgia, estas crianças ainda precisam tomar hormônios por toda a vida. Além disso, muitas delas ficam com problemas como incontinência urinária, perda de sensação e função sexual e trauma psicológico. No Brasil não há legislação sobre o assunto. Apenas em Malta e no Chile existem leis proibindo intervenção médica em crianças intersexo sem emergências clínicas.",
                info: "Saiba mais sobre o assunto neste vídeo e nesta matéria.",
                labelAFavor: "Sou a FAVOR de cirurgia genital em crianças intersexo por motivo estético",
                labelContra: "Sou CONTRA cirurgia genital em crianças intersexo por motivo estético",
              },
              sexualidade: {
                label: "Discussão de gênero e sexualidade nas escolas",
                pergunta: "Jovens estão sendo impedidos de estudar e debater sobre gênero e sexualidade nas escolas. Municípios e estados em todo país têm aprovado leis contra a “ideologia de gênero”, associadas à ideia de promover uma “Escola sem partido”. Mas o Supremo Tribunal Federal já decidiu, em 2020, que estas leis são contrárias à Constituição, porque violam princípios do sistema educacional brasileiro: a liberdade de ensinar e o pluralismo de ideias.",
                info: "Saiba mais sobre como a “ideologia de gênero” é um projeto político e fundamentalista na série de reportagens O Reino Sagrado da Desinformação da Gênero e Número.",
                labelAFavor: "Sou a FAVOR da discussão de gênero e sexualidade nas escolas",
                labelContra: "Sou CONTRA a discussão de gênero e sexualidade nas escolas",
              },
              casas: {
                label: "Casas públicas de acolhida para LGBT+",
                pergunta: "Jovens LGBT+ são expulsos de casa pela família, o Brasil é o país que mais mata LGBT+ no mundo e a saúde mental desta população ficou ainda pior durante a pandemia. Praticamente não há políticas públicas no Brasil de atendimento à população LGBT+. O movimento LGBT+ demanda desde a década de 70 que sejam criadas pelo Estado casas de acolhida. Na ausência do Estado, a própria sociedade civil já criou 14 casas de acolhida LGBT+ em todas as regiões do país, mantidas principalmente com recursos de doações. Além de abrigo, costumam oferecer também atendimento de saúde clínica, mental e orientações sobre seus direitos.",
                info: "Saiba mais sobre o trabalho das casas de acolhida nesta reportagem e nesta outra reportagem também.",
                labelAFavor: "Sou a FAVOR de Casas públicas de acolhida para LGBT+",
                labelContra: "Sou CONTRA casas públicas de acolhida para LGBT+",
              },
              
            },
            raca: {
              titulo: "#Raça",
              ensino: {
                label: "Ensino de história e cultura afro-brasileira em todas as escolas",
                pergunta: "Há 17 anos foi aprovada uma lei para o ensino obrigatório, em todas as escolas, da história e cultura afro-brasileira (Lei 10.639/03). Mas, ainda hoje, não se ensina a luta dos negros e as contribuições do povo negro nas áreas social, econômica e política na história do Brasil. O povo negro é retratado apenas como escravizado. Falta fiscalização da aplicação da lei nas escolas e elaboração de materiais didáticos com estes conteúdos.",
                info: "Saiba mais sobre a dificuldade do ensino de história e cultura-afrobrasileira nas escolas nesta reportagem.",
                labelAFavor: "Sou a FAVOR do ensino história e cultura afro-brasileira em todas as escolas",
                labelContra: "Sou CONTRA o ensino história e cultura afro-brasileira em todas as escolas",
              },
              cotas: {
                label: "Cotas para pessoas negras no Legislativo",
                pergunta: "56% da população brasileira é negra, mas candidaturas negras recebem apenas 20% dos recursos públicos para fazerem suas campanhas e menos de 30% dos deputados estaduais e federais eleitos são negros. Não há democracia se não houver representação de negros e quilombolas, também na política. Os movimentos negros no Brasil sempre reivindicaram cotas raciais como uma medida de reparação histórica. Desde 2011, o deputado Federal Luis Alberto propôs um projeto para que houvesse cotas para políticos negros como vereadores, deputados estaduais e deputados federais (PEC 116/2011). Este projeto chegou a ser aprovado em uma etapa importante na Câmara dos Deputados, mas já está há 5 anos arquivado. Em 2020, o Tribunal Superior Eleitoral o Supremo Tribunal Federal discutiram que as candidaturas negras devem receber proporcionalmente recursos para campanha e tempo de tv e rádio nas eleições. Esta vitória reacende o debate sobre a urgência da representatividade das populações negras para que haja democracia no Brasil.",
                info: "Saiba mais sobre cotas raciais na política nesta reportagem e sobre o financiamento público e tempo de TV para candidaturas negras na plataforma PANE Antirracista do Instituto Marielle Franco.",
                labelAFavor: "Sou a FAVOR de cotas para pessoas negras no Legislativo",
                labelContra: "Sou CONTRA cotas para pessoas negras no Legislativo",
              },
              saude: {
                label: "Política de saúde para a população negra",
                pergunta: "O Brasil tem mais de 5.500 municípios, mas apenas 57 colocam em prática a Política Nacional de Saúde Integral da População Negra, criada em 2006. Há doenças que afetam mais a população negra (exemplo: pressão alta, anemia falciforme, diabetes, glaucoma) e também há práticas racistas no atendimento de saúde (exemplo: mulheres negras recebem menos anestesia nos partos do que mulheres brancas). Por isso, é fundamental que exista no SUS políticas de atendimento específicas para a população negra. Em 2019, o SUS perdeu 20 bilhões de reais de seu orçamento e isso também afeta diretamente a população negra, pois são 67% dos usuários do SUS.",
                info: "Saiba mais sobre a falta de implementação da política de saúde para a população negra nesta reportagem sobre o impacto disso na pandemia neste evento da ONU Mulheres.",
                labelAFavor: "Sou a FAVOR da política de saúde para a população negra",
                labelContra: "Sou CONTRA a política de saúde para a população negra",
              },              
            },
            povos: {
              titulo: "#Povos Tradicionais",
              politicas: {
                label: "Políticas emergenciais de combate à pandemia nas comunidades quilombolas",
                pergunta: "No Brasil, há 16 milhões de quilombolas, distribuídos em 6.300 comunidades remanescentes de territórios em que houve resistência negra à escravização. A Constituição de 1988 garantiu o direito dos quilombolas à propriedade de suas terras, mas, até hoje, apenas 5,34% dos territórios quilombolas conseguiu. O atual presidente afirmou em campanha que não investiria nenhum centavo em indígenas e quilombolas e derrubou uma série de medidas destinadas à saúde de povos indígenas, quilombolas e demais comunidades tradicionais durante a pandemia, que havia sido aprovada pelo Congresso Nacional. A população quilombola tem morrido 120% mais de COVID-19 do que a média da população brasileira. Por isso, a Coordenação Nacional de Articulação das Comunidades Negras Rurais Quilombolas – CONAQ recorreu ao Supremo Tribunal Federal para que o Estado brasileiro tome ações emergenciais de combate à pandemia nas comunidades quilombolas (ADPF 742/2020).",
                info: "Saiba mais sobre a urgência de políticas de combate à pandemia nas comunidades quilombolas nesta reportagem e no vídeo da campanha Vidas Quilombolas Importam da CONAQ.",
                labelAFavor: "Sou a FAVOR de políticas emergenciais de combate à pandemia nas comunidades quilombolas",
                labelContra: "Sou CONTRA políticas emergenciais de combate à pandemia nas comunidades quilombolas",
              },   
              sacrificio: {
                label: "Sacrifício de animais no contexto religioso",
                pergunta: "Em 2019, o Supremo Tribunal Federal decidiu que o sacrifício de animais praticado por povos de terreiros, judeus e muçulmanos está de acordo com a Constituição e pode ser praticado (RE 494.601). A permissão de se realizar o sacrifício ritual em contexto religioso combate o racismo dirigido às religiões de matriz africana, principais alvos de ataques e intolerância pela prática, além de promover a defesa do Estado laico.",
                info: "Saiba mais sobre a decisão do Supremo Tribunal Federal nesta reportagem e sobre o racismo às religiões de matriz africanas neste vídeo.",
                labelAFavor: "Sou a FAVOR do sacrifício de animais no contexto religioso.",
                labelContra: "Sou CONTRA o sacrifício de animais no contexto religioso.",
              },
              demarcacao: {
                label: "Demarcação de terras indígenas",
                pergunta: "Os povos indígenas têm direito ao reconhecimento da demarcação das suas terras desde a Constituição de 1988. As demarcações são importantes não apenas porque garantem a diversidade étnica e cultural dos povos indígenas, mas também por serem os territórios onde há maior conservação ambiental. Uma série de políticas públicas e recursos para indígenas são melhor garantidos nas terras indígenas demarcadas, como escolas para educação especial indígena, postos de saúde, água tratada. Desde 2016, nenhuma terra indígena foi demarcada no Brasil. Comunidades indígenas sem terras demarcadas estão sofrendo maior impacto com a pandemia. O atual presidente derrubou uma série de medidas destinadas à saúde de povos indígenas, quilombolas e demais comunidades tradicionais durante a pandemia, que havia sido aprovada pelo Congresso Nacional. A taxa de mortalidade indígena por COVID-19 é 224% mais alta do que a média da população brasileira.",
                info: "Saiba mais sobre o impacto da não demarcação de terras sobre os indígenas na pandemia nesta reportagem e dados sobre a pandemia na plataforma Emergência Indígena da Articulação dos Povos Indígenas do Brasil - APIB.",
                labelAFavor: "Sou a FAVOR da demarcação de terras indígenas",
                labelContra: "Sou CONTRA a demarcação de terras indígenas",
              },
            },
            politicas: {
              titulo: "#Políticas Sociais",
              renda: {
                label: "Renda básica permanente mantendo os programas sociais existentes",
                pergunta: "Com a pandemia, após muita pressão da sociedade e da oposição ao governo, foi aprovado o auxílio emergencial no valor de 600 reais, que alcançou mais de 53 milhões de brasileiros. Com a popularidade que a medida trouxe ao governo, este passou a defender a ideia de uma renda básica permanente. Esta é uma ideia antiga que pode garantir que famílias mais vulneráveis possam ter acesso a direitos básicos e melhorar os índices de pobreza no Brasil, reduzindo desigualdades sociais, econômicas, tributárias e os impactos da instabilidade do mercado de trabalho. Mas a proposta do governo de implementar a renda básica permanente quer eliminar ou reduzir ainda mais a verba de outros programas sociais como o SUS, educação pública gratuita e agricultura familiar.",
                info: "Saiba mais com a campanha Renda Básica que Queremos!",
                labelAFavor: "Sou a FAVOR da renda básica permanente mantendo os programas sociais existentes",
                labelContra: "Sou CONTRA a renda básica permanente mantendo os programas sociais existentes",
              },
              teto: {
                label: "Teto de gastos públicos",
                pergunta: "Em 2016, foi aprovada uma política econômica conhecida por “teto de gastos públicos”, que nos próximos 20 anos pode reduzir cerca de 1/3 dos gastos públicos federais, voltando a níveis de recursos anteriores à Constituição de 1988. Isso levaria ao congelamento de gastos sociais com políticas para a saúde, educação e seguro desemprego. Já estamos sentindo os impactos do “teto dos gastos públicos”, com a redução de 20 bilhões de reais para o SUS, em plena pandemia.",
                info: "Saiba mais a respeito com a campanha #AcabaTetodeGastos e com esta matéria.",
                labelAFavor: "Sou a FAVOR do teto dos gastos públicos",
                labelContra: "Sou CONTRA o teto dos gastos públicos",
              },              
            },
            seguranca: {
              titulo: "#Segurança Pública",
              guardas: {
                label: "Guardas Civis Municipais andarem armadas",
                pergunta: "A atuação da Guardas Civis Municipais de várias cidades tem se tornado cada vez mais parecida (e até mesmo realizada em conjunto) com a Polícia Militar. Enquanto o papel da Polícia Militar é o de garantir a segurança pública, o das Guardas Civis era apenas o de proteger o patrimônio público da cidade e cada município pode escolher ter uma Guarda ou não. Mas em 2014, uma lei aumentou o papel das Guardas, prevendo o patrulhamento preventivo e o uso progressivo da força (Lei 13.022/2014). A partir daí, muitas Guardas passaram a atuar de modo muito semelhante à Polícia Militar: trabalhando armadas, realizando patrulhamento ostensivo, abordagens seletivas, apreensões e prisões. Isso é um problema, porque a Polícia Militar é a que mais mata jovens negros e periféricos. Só durante a pandemia as mortes por policiais aumentaram 31%.",
                info: "Saiba mais sobre o problema da ampliação do papel da Guarda Municipal nesta matéria.",
                labelAFavor: "Sou a FAVOR das Guardas Civis Municipais andarem armadas",
                labelContra: "Sou CONTRA as Guardas Civis Municipais andarem armadas",
              },
              emprego: {
                label: "Política de emprego para pessoas que saem da prisão",
                pergunta: "As pessoas que saem da prisão muitas vezes não conseguem empregos por conta do preconceito, mesmo quando já cumpriram toda a sua pena há muito tempo. Oferecer uma política de acesso ao mercado de trabalho para estas pessoas é importante para que consigam romper com um ciclo de violência e desigualdade no qual estão inseridas, na maioria das vezes. O Brasil tem mais de 700 mil presos e só 19% deles consegue trabalhar e 13% estudar dentro das prisões. Isso também contribui para que saiam das prisões sem condições mínimas para o mercado de trabalho. O município pode promover vagas para pessoas com este perfil ou ao menos reduzir as limitações de acesso ao trabalho. Na cidade de de São Paulo, por exemplo, uma lei impede que pessoas condenadas criminalmente, não importa há quanto tempo, possam ser taxistas (Lei 7.329/69). Isso acaba sendo uma pena de perpétua e desproporcional, que só reforça a discriminação.",
                info: "Saiba como as cidades podem contribuir com outras políticas para quem sai da prisão, além do emprego, na Agenda Municipal para Justiça Criminal do Instituto Terra, Trabalho e Cidadania - ITTC.",
                labelAFavor: "Sou a FAVOR de política de emprego para pessoas que saem da prisão",
                labelContra: "Sou CONTRA política de emprego para pessoas que saem da prisão",
              },
            },
            drogas: {
              titulo: "#Drogas",
              descriminalizar: {
                label: "Descriminalizar o comércio de drogas para reduzir a quantidade de mulheres e jovens negros presos",
                pergunta: "O Brasil tem a terceira maior população carcerária do mundo, com mais de 700 mil pessoas presas. As cadeias estão superlotadas, trabalhando em média 70% acima da sua capacidade. E um dos motivos é a política de “guerra às drogas”. Em 2006, aprovamos a Lei de Drogas, uma das principais responsáveis pelo aumento do número de presos no país (Lei 11.343/2016). Hoje não é crime ser usuário de drogas, mas é crime comercializar drogas. O problema é que a lei não traz critérios para diferenciar um do outro. Ou seja, é mais provável que um usuário, negro, pobre e periférico seja preso por tráfico do que tratado como alguém que talvez precise de atendimento na saúde pública. Drogas é a segunda maior causa de prisão dos homens e é a maior causa de prisão de mulheres (metade delas está presa por comércio de drogas). Pessoas negras são 56% da população brasileira, mas são 70% da população das prisões. Jovens, de 18 a 29 anos, são 18% da população brasileira, mas 44% dos presos. Além do encarceramento, a “guerra às drogas” também provoca maior violência policial, mortes por homicídio e afasta os usuários de drogas de buscar atendimento na saúde pública.",
                info: "Saiba mais sobre com a Agenda Nacional pelo Desencarceramento, com o vídeo e jogo Política de Drogas é uma questão de Mulheres do Instituto Terra, Trabalho e Cidadania - ITTC.",
                labelAFavor: "Sou a FAVOR de descriminalizar o comércio de drogas para reduzir a quantidade de mulheres e jovens negros presos",
                labelContra: "Sou CONTRA descriminalizar o comércio de drogas para reduzir a quantidade de mulheres e jovens negros presos",
              },
              tratamento: {
                label: "Tratamento de usuário de drogas no SUS com redução de danos",
                pergunta: "Usuários de drogas devem poder ser tratados no SUS. Mas vários governos municipais, estaduais e o atual governo federal têm retirado verbas da saúde pública e destinado para entidades religiosas. As formas de tratamento do usuário de drogas no SUS e nas entidades religiosas são totalmente diferentes. O SUS adota políticas que respeitam o momento de cada usuário no seu tratamento. Isso significa que para as pessoas que ainda não podem ou não querem parar de usar drogas, o objetivo maior é reduzir os danos causados pelo uso. Por exemplo, os usuários podem receber seringas descartáveis, para não serem contaminados por doenças sexualmente transmissíveis, ou podem ser orientados a trocar uma droga por outra de menor risco. Já as entidades religiosas, normalmente conhecidas como “Comunidades Terapêuticas”, promovem a intervenção do usuário e o método da abstinência total do uso de drogas. Isso reforça a ideia de que usuários de drogas devem ser excluídos da sociedade, de que são criminosos, ou uma abordagem moral e religiosa e não de saúde pública.",
                info: "Saiba mais sobre políticas de redução de danos aqui e sobre comunidades terapêuticas aqui.",
                labelAFavor: "Sou a FAVOR do tratamento de usuário de drogas no SUS com redução de danos",
                labelContra: "Sou CONTRA o tratamento de usuário de drogas no SUS com redução de danos",
              },
            },
            comunicacao: {
              1: {
                label: "Acesso gratuito à internet nas periferias, comunidades indígenas e quilombolas",
                pergunta: "Na média nacional, 28% dos domicílios brasileiros ainda não tem acesso à internet. Na área rural, esse número sobre para 48%. Enquanto 99% dos domicílios da classe A estão conectados, nas classes D e E, 50% dos domicílios não possuem conexão. O Marco Civil da Internet reconhece que o acesso à internet é essencial para o exercício da cidadania (Lei n° 12.965/2014), mas a exclusão digital afeta muito mais a população pobre, periférica, quilombola e indígenas. Apenas 48% da população indígena e 55% das pessoas negras já utilizou um computador pelo menos uma vez na vida.",
                info: "Saiba mais sobre a desigualdade no acesso à internet no vídeo da campanha Internet Direito Seu do Intervozes.",
                labelAFavor: "Sou a FAVOR do acesso gratuito à internet nas periferias, comunidades indígenas e quilombolas",
                labelContra: "Sou CONTRA o acesso gratuito à internet nas periferias, comunidades indígenas e quilombolas",
              },
              2: {
                label: "Políticos serem donos de emissoras de rádio e TV",
                pergunta: "Nas últimas eleições, 34 candidatos a deputado estadual, federal, senador e governador eram donos de emissoras de rádio e TV e 26 foram eleitos. Isso é um problema, porque eles podem influenciar o que a mídia fala sobre eles e seus adversários políticos, seja durante a campanha, seja quando eleitos. No caso de deputados federais e senadores eleitos é ainda mais grave. A Constituição não permite que eles tenham contratos com o Estado e as emissoras de rádio e TV são concessões públicas, um tipo de contrato. Além disso, são os deputados e senadores que fiscalizam e decidem quem pode ter uma emissora de rádio e TV. Ou seja, decidem sobre eles mesmos. Duas ações pedem uma manifestação do Supremo Tribunal Federal sobre o assunto, mas nem começaram a ser julgadas (ADPF 246 e ADPF 379).",
                info: "Saiba mais sobre quem eram os políticos donos de rádio e TV que foram candidatos nas últimas eleições e quem foram os deputados federais e senadores eleitos nos levantamentos do Intervozes.",
                labelAFavor: "Sou a FAVOR de políticos serem donos de emissoras de rádio e TV",
                labelContra: "Sou CONTRA políticos serem donos de emissoras de rádio e TV",
              },
            },
            demoracracia: {
              1: {
                label: "Cota de gênero e raça nas lideranças dos partidos",
                pergunta: "Os partidos políticos e sua liberdade são fundamentais à democracia. Durante a ditadura, só podiam existir dois partidos e vários políticos tiveram os seus mandatos cassados. Mas os partidos brasileiros ainda são marcados pela ausência de democracia interna. As lideranças dos partidos, por exemplo, são principalmente compostas por homens brancos, heterossexuais, cisgêneros e ricos e não costuma haver mecanismos internos democráticos para a sua escolha. Mulheres ocupam apenas 25% das lideranças partidárias. A falta de representatividade nos cargos de direção dos partidos acaba impactando na distribuição dos recursos públicos para as campanhas, pois são estas lideranças que definem quanto cada candidatura deve receber. Mulheres negras, por exemplo, são 28% da população brasileira, 12,9% das candidatas a deputado federal, mas receberam apenas 5,7% dos recursos públicos de campanha e foram apenas 2,5% dos eleitos. Também é importante que os partidos invistam em espaços de articulação política de grupos minorizados dentro dos partidos, como os setoriais de mulheres, pessoas negras e LGBT+. Enquanto 76% dos partidos têm setoriais de mulheres, apenas 42% tem setoriais negras e 33% de LGBT+.",
                info: "Para saber mais sobre a presença de setoriais de mulheres, pessoas negras e LGBT+ em cada partido, ver pesquisa da Casa 1 e #VoteLGBT.",
                labelAFavor: "Sou a FAVOR de cota de gênero e raça nas lideranças dos partidos",
                labelContra: "Sou CONTRA cota de gênero e raça nas lideranças dos partidos",
              },
              2: {
                label: "Corte de recursos públicos a partidos com candidaturas que praticam discurso de ódio ou violência política",
                pergunta: "O Brasil é o terceiro país do mundo mais violento com seus defensores de direitos humanos e líderes de movimentos sociais e isso se manifesta também na política e nas eleições. Em 2019, foram assassinados no país 24 ativistas (10 deles eram indígenas) e 34 políticos (candidatos ou eleitos). Nos anos de eleições, há picos de denúncias sobre ofensas e ataques contra candidaturas (muitas vezes estes ataques são praticados por outras candidaturas) na internet. A violência política tem início no período de campanha e continua no exercício dos mandatos eleitos. O objetivo é silenciar políticos ou fazer com que se retirem da política. Esta violência atinge, principalmente, quem não costuma ocupar o espaço político: mulheres, jovens, pessoas negras, LGBT+, ativistas e defensores de direitos humanos. Os partidos recebem recursos públicos para fazerem suas campanhas e o discurso de ódio e violência política não deveria ser financiados com estes recursos. Violência não pode ser estratégia para obtenção de votos em campanhas eleitorais.",
                info: "Para denunciar discurso de ódio e violência política nestas eleições, acesse o site do TretAqui.org. Para orientações sobre como se defender e evitar ataques na internet, confira a cartilha Eleições e Internet: guia para proteção de direitos nas campanhas eleitorais da Coalizão Direitos na Rede.",
                labelAFavor: "Sou a FAVOR de corte de recursos públicos a partidos com candidaturas que praticam discurso de ódio ou violência política",
                labelContra: "Sou CONTRA corte de recursos públicos a partidos com candidaturas que praticam discurso de ódio ou violência política",
              },
            },
            meioAmbiente: {
              1: {
                label: "Consentimento dos povos indígenas para a realização de empreendimentos",
                pergunta: "Uma série de empreendimentos (como construções de barragens, rodovias, mineração) tem sido realizada em territórios indígenas sem que haja consulta e consentimento prévio dos povos indígenas. Consultas prévias, com o objetivo de alcançar um acordo ou consentimento, são um direito dos povos indígenas (Convenção 169 da Organização Internacional do Trabalho). O Estado ou as empresas acabam fazendo pequenas reuniões, sem envolver um grupo representativo dos povos indígenas afetados, apenas para cumprirem esta etapa formal e já poderem, paralelamente, emitir autorizações para o início das obras. O processo de consulta e consentimento adequado deveria ser elaborado e proposto pelos próprios povos indígenas, em respeito a sua autodeterminação. O desrespeito a esse direito provoca impactos não só na comunidade indígena, nos seus saberes tradicionais e relação ancestral com a terra, mas também ao meio ambiente. Os povos indígenas são protetores das florestas. As terras indígenas demarcadas possuem preservação ambiental maior até do que a de parques ambientais estaduais e nacionais.",
                info: "Conheça um exemplo de protocolo de consulta prévia e consentimento elaborado pelo povo indígena Mundukuru.",
                labelAFavor: "Sou a FAVOR do consentimento dos povos indígenas para a realização de empreendimentos.",
                labelContra: "Sou CONTRA o consentimento dos povos indígenas para a realização de empreendimentos.",
              },
            }
          }
        }
      },
    },
  },
})

export default i18n
