<template>
  <div>
    <ModalBuy />
    <!-- Start Product Area -->
    <div class="product-area section">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-title">
              <h2>Para todo PET</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="product-info">
              <div class="nav-main">
                <!-- Tab Nav -->
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      data-toggle="tab"
                      href="#alimentos"
                      role="tab"
                      >Alimentos</a
                    >
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      data-toggle="tab"
                      href="#acessorios"
                      role="tab"
                      >Acessórios</a
                    >
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      data-toggle="tab"
                      href="#limpeza"
                      role="tab"
                      >Limpeza</a
                    >
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      data-toggle="tab"
                      href="#remedios"
                      role="tab"
                      >Remédios</a
                    >
                  </li>
                </ul>
                <!--/ End Tab Nav -->
              </div>
              <div class="tab-content" id="myTabContent">
                <!-- Start Single Tab -->
                <div
                  class="tab-pane fade show active"
                  id="alimentos"
                  role="tabpanel"
                >
                  <div class="tab-single">
                    <div class="row">
                      <div
                        v-for="food in foods"
                        :key="food.id"
                        class="col-xl-3 col-lg-4 col-md-4 col-12"
                      >
                        <div class="single-product">
                          <div class="product-img">
                            <a
                              data-toggle="modal"
                              :data-target="food.id_html"
                              href="#"
                            >
                              <img
                                class="default-img"
                                :src="food.image_url"
                                alt="#"
                              />
                              <img
                                class="hover-img"
                                :src="food.image_url"
                                alt="#"
                              />
                              <span class="new">New</span>
                            </a>
                            <div class="button-head">
                              <div class="product-action">
                                <a
                                  data-toggle="modal"
                                  :data-target="food.id_html"
                                  title="Quick View"
                                >
                                  <i class="ti-eye"></i>
                                </a>
                              </div>
                              <div class="product-action-2">
                                <a
                                  data-toggle="modal"
                                  :data-target="food.id_html"
                                  title="Add to cart"
                                  href="#"
                                  >Adicionar ao Carrinho</a
                                >
                              </div>
                            </div>
                          </div>
                          <div class="product-content">
                            <h3>
                              <a
                                data-toggle="modal"
                                :data-target="food.id_html"
                                href="#"
                                >{{ food.name }}</a
                              >
                            </h3>
                            <div class="product-price">
                              <span>${{ food.price }}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!--/ End Single Tab -->
                <!-- Start Single Tab -->
                <div class="tab-pane fade" id="acessorios" role="tabpanel">
                  <div class="tab-single">
                    <div class="row products-acessorios">
                      <div
                        v-for="accessory in accessories"
                        :key="accessory.id"
                        class="col-xl-3 col-lg-4 col-md-4 col-12"
                      >
                        <div class="single-product">
                          <div class="product-img">
                            <a
                              data-toggle="modal"
                              :data-target="accessory.id_html"
                              href="#"
                            >
                              <img
                                class="default-img"
                                :src="accessory.image_url"
                                alt="#"
                              />
                              <img
                                class="hover-img"
                                :src="accessory.image_url"
                                alt="#"
                              />
                            </a>
                            <div class="button-head">
                              <div class="product-action">
                                <a
                                  :data-target="accessory.id_html"
                                  data-toggle="modal"
                                  title="Quick View"
                                >
                                  <i class="ti-eye"></i>
                                </a>
                              </div>
                              <div class="product-action-2">
                                <a
                                  data-toggle="modal"
                                  :data-target="accessory.id_html"
                                  title="Add to cart"
                                  href="#"
                                  >Adicionar ao Carrinho</a
                                >
                              </div>
                            </div>
                          </div>
                          <div class="product-content">
                            <h3>
                              <a
                                data-toggle="modal"
                                :data-target="accessory.id_html"
                                href="#"
                                >{{ accessory.name }}</a
                              >
                            </h3>
                            <div class="product-price">
                              <span>${{ accessory.price }}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!--/ End Single Tab -->
                <!-- Start Single Tab -->
                <div class="tab-pane fade" id="limpeza" role="tabpanel">
                  <div class="tab-single">
                    <div class="row products-limpeza">
                      <div
                        v-for="cleaning in cleanings"
                        :key="cleaning.id"
                        class="col-xl-3 col-lg-4 col-md-4 col-12"
                      >
                        <div class="single-product">
                          <div class="product-img">
                            <a
                              data-toggle="modal"
                              :data-target="cleaning.id_html"
                              href="#"
                            >
                              <img
                                class="default-img"
                                :src="cleaning.image_url"
                                alt="#"
                              />
                              <img
                                class="hover-img"
                                :src="cleaning.image_url"
                                alt="#"
                              />
                            </a>
                            <div class="button-head">
                              <div class="product-action">
                                <a
                                  data-toggle="modal"
                                  :data-target="cleaning.id_html"
                                  title="Quick View"
                                  ><i class="ti-eye"></i
                                  ><span>Quick Shop</span></a
                                >
                                <a
                                  data-toggle="modal"
                                  :data-target="cleaning.id_html"
                                  title="Wishlist"
                                  href="#"
                                  ><i class="ti-heart"></i
                                  ><span>Add to Wishlist</span></a
                                >
                                <a
                                  data-toggle="modal"
                                  :data-target="cleaning.id_html"
                                  title="Compare"
                                  href="#"
                                  ><i class="ti-bar-chart-alt"></i
                                  ><span>Add to Compare</span></a
                                >
                              </div>
                              <div class="product-action-2">
                                <a
                                  data-toggle="modal"
                                  :data-target="cleaning.id_html"
                                  title="Add to cart"
                                  href="#"
                                  >Add to cart</a
                                >
                              </div>
                            </div>
                          </div>
                          <div class="product-content">
                            <h3>
                              <a
                                data-toggle="modal"
                                :data-target="cleaning.id_html"
                                href="#"
                                >{{ cleaning.name }}</a
                              >
                            </h3>
                            <div class="product-price">
                              <span>${{ cleaning.price }}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!--/ End Single Tab -->
                <!-- Start Single Tab -->
                <div class="tab-pane fade" id="remedios" role="tabpanel">
                  <div class="tab-single">
                    <div class="row products-remedios">
                      <div
                        v-for="medicine in medicines"
                        :key="medicine.id"
                        class="col-xl-3 col-lg-4 col-md-4 col-12"
                      >
                        <div class="single-product">
                          <div class="product-img">
                            <a
                              data-toggle="modal"
                              :data-target="medicine.id_html"
                              href="#"
                            >
                              <img
                                class="default-img"
                                :src="medicine.image_url"
                                alt="#"
                              />
                              <img
                                class="hover-img"
                                :src="medicine.image_url"
                                alt="#"
                              />
                              <span class="out-of-stock">Hot</span>
                            </a>
                            <div class="button-head">
                              <div class="product-action">
                                <a
                                  :data-target="medicine.id_html"
                                  data-toggle="modal"
                                  title="Quick View"
                                  ><i class="ti-eye"></i
                                  ><span>Quick Shop</span></a
                                >
                                <a
                                  data-toggle="modal"
                                  :data-target="medicine.id_html"
                                  title="Wishlist"
                                  href="#"
                                  ><i class="ti-heart"></i
                                  ><span>Add to Wishlist</span></a
                                >
                                <a
                                  data-toggle="modal"
                                  :data-target="medicine.id_html"
                                  title="Compare"
                                  href="#"
                                  ><i class="ti-bar-chart-alt"></i
                                  ><span>Add to Compare</span></a
                                >
                              </div>
                              <div class="product-action-2">
                                <a
                                  data-toggle="modal"
                                  :data-target="medicine.id_html"
                                  title="Add to cart"
                                  href="#"
                                  >Add to cart</a
                                >
                              </div>
                            </div>
                          </div>
                          <div class="product-content">
                            <h3>
                              <a
                                data-toggle="modal"
                                :data-target="medicine.id_html"
                                href="#"
                                >{{ medicine.name }}</a
                              >
                            </h3>
                            <div class="product-price">
                              <span class="old">$60.00</span>
                              <span>${{ medicine.price }}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!--/ End Single Tab -->
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- <div v-for="food in foods" :key="food.id">
      <ModalBuy :id_html="food.id_html" :name="food.name" :price="food.price" />
    </div>

    <div v-for="acessory in accessories" :key="acessory.id">
      <ModalBuy
        :id_html="acessory.id_html"
        :name="acessory.name"
        :price="acessory.price"
      />
    </div>

    <div v-for="cleaning in cleanings" :key="cleaning.id">
      <ModalBuy
        :id_html="cleaning.id_html"
        :name="cleaning.name"
        :price="cleaning.price"
      />
    </div>

    <div v-for="medicine in medicines" :key="medicine.id">
      <ModalBuy
        :id_html="medicine.id_html"
        :name="medicine.name"
        :price="medicine.price"
      />
    </div> -->
    </div>
    <!-- End Product Area -->
  </div>
</template>

<script>
import axios from "axios";
import ModalBuy from "./ModalBuy";

export default {
  name: "ShowCaseBase",
  components: {
    ModalBuy,
  },
  data() {
    return {
      foods: [],
      accessories: [],
      cleanings: [],
      medicines: [],
      baseUrl: "http://localhost:5000/product_image/",
    };
  },
  created: function () {
    axios
      .get("http://localhost:5000/products_varied?qtd=4&category=alimentos")
      .then((res) => {
        this.foods = res.data;
        for (var prop in this.foods) {
          this.foods[prop]["id_html"] = "#" + this.foods[prop]["_id"];
          this.foods[prop]["image_url"] =
            this.baseUrl + this.foods[prop]["_id"];
        }
      });

    axios
      .get("http://localhost:5000/products_varied?qtd=4&category=acessorios")
      .then((res) => {
        this.accessories = res.data;
        for (var prop in this.accessories) {
          this.accessories[prop]["id_html"] =
            "#" + this.accessories[prop]["_id"];
          this.accessories[prop]["image_url"] =
            this.baseUrl + this.accessories[prop]["_id"];
        }
      });

    axios
      .get("http://localhost:5000/products_varied?qtd=4&&category=limpeza")
      .then((res) => {
        this.cleanings = res.data;
        for (var prop in this.cleanings) {
          this.cleanings[prop]["id_html"] = "#" + this.cleanings[prop]["_id"];
          this.cleanings[prop]["image_url"] =
            this.baseUrl + this.cleanings[prop]["_id"];
        }
      });

    axios
      .get("http://localhost:5000/products_varied?qtd=4&&category=remedios")
      .then((res) => {
        this.medicines = res.data;
        for (var prop in this.medicines) {
          this.medicines[prop]["id_html"] = "#" + this.medicines[prop]["_id"];
          this.medicines[prop]["image_url"] =
            this.baseUrl + this.medicines[prop]["_id"];
        }
      });
  },
};
</script>

