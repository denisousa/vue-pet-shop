<template>
  <section id="contact-us" class="contact-us section">
    <div class="container">
      <div class="contact-head">
        <div class="row">
          <div class="col-lg-8 col-12">
            <div class="form-main">
              <div class="title">
                <h4>Cadastre seu cartão de crédito</h4>
                <h3>Preencha os campos listados abaixo</h3>
              </div>
              <form class="form">
                <div class="row">
                  <div class="col-lg-6 col-12">
                    <div class="form-group">
                      <label>Nome do titular<span>*</span></label>
                      <input
                        v-model="creditCard.card_holder"
                        name="name"
                        type="text"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-12">
                    <div class="form-group">
                      <label>CPF do titular<span>*</span></label>
                      <input
                        v-model="creditCard.cpf_holder"
                        name="cpf"
                        type="text"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-12">
                    <div class="form-group">
                      <label>Número do cartão<span>*</span></label>
                      <input
                        v-model="creditCard.number"
                        name="number"
                        type="text"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-12">
                    <div class="form-group">
                      <label>CVV<span>*</span></label>
                      <input
                        v-model="creditCard.cvv"
                        name="cvv"
                        type="text"
                        placeholder=""
                      />
                    </div>
                  </div>
                <div class="col-lg-6 col-12">
                    <div class="form-group">
                      <label>MM/AAAA<span>*</span></label>
                 <input v-model="creditCard.month_year" type="month" id="bdaymonth" name="bdaymonth">
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group button">
                      <button  @click.prevent="registryCard()" class="btn">Salvar Cartão</button>
                      <router-link class="btn" to="/creditcards">Visualizar Cartões</router-link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="col-lg-4 col-12">
            <div class="single-head">
              <div class="single-info">
                <i class="fa fa-phone"></i>
                <h4 class="title">Ligue para nos:</h4>
                <ul>
                  <li>+123 456-789-1120</li>
                  <li>+522 672-452-1120</li>
                </ul>
              </div>
              <div class="single-info">
                <i class="fa fa-envelope-open"></i>
                <h4 class="title">Email:</h4>
                <ul>
                  <li>
                    <a href="#">suport@carepet.com</a>
                  </li>
                  <li>
                    <a href="#">info@carepet.com</a>
                  </li>
                </ul>
              </div>
              <div class="single-info">
                <i class="fa fa-location-arrow"></i>
                <h4 class="title">Endereço:</h4>
                <ul>
                  <li>
                    Av. Dr. Silas Munguba, 1700 - Itaperi, Fortaleza - CE,
                    60714-903
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "CreditCardRegistry",
  data() {
    return {
      creditCard: {
        number: null,
        card_holder: null,
        cpf_holder: null,
        cvv: null,
        month_year: null
      },
    };
  },
  methods: {
    registryCard() {
      this.creditCard.month = this.creditCard.month_year.split("-")[0];
      this.creditCard.year = this.creditCard.month_year.split("-")[1]; 
      console.log(this.creditCard);
      axios.post("http://localhost:5010/card", this.creditCard)
      .then((res) => {
        console.log(res.data);
        alert("Cartão salvo com sucesso!");
      })
      .catch((err) => {
        console.log(err);
        alert("Erro ao cadastrar o cartão...");
      })
      // e.preventDefault();

    },
  },
};
</script>
