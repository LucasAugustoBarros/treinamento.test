Feature: Cadastro de cliente no Portl Ponto Frio
    
    Scenario: Cadastrar Pessoa Fisica no Portal
        Given eu estou na pagina de identificação do Portal
        When eu preencho os dados obrigatórios dos dados pessoais
        And eu preencho os dados obrigatórios dos dados de acesso ao Ponto Frio
        Then eu sou redirecionada para a pagina 
    Scenario: Cadastrar Pessoa Juridica no Portal
        Given eu estou na pagina de identificação do Portal
        When eu preencho os dados obrigatórios dos dados da empresa
        And eu preencho os dados obrigatórios dos dados de acesso ao Ponto Frio
        And eu preencho os dados de endereço
        And eu preencho os dados de pagamento
        Then eu recebo a confirmação da compra do produto