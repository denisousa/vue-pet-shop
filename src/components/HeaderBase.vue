<template>
  <!-- Header -->
  <header class="header shop">
    <div class="middle-inner">
      <div class="container">
        <div class="row">
          <div class="col-lg-2 col-md-2 col-12">
            <!-- Logo -->
            <div class="logo">
              <a href=""><img src="static/images/logo.png" alt="logo" /></a>
            </div>
            <!--/ End Logo -->
            <!-- Search Form -->
            <div class="search-top">
              <div class="top-search">
                <a href="#0"><i class="ti-search"></i></a>
              </div>
              <!-- Search Form -->
              <div class="search-top">
                <form class="search-form">
                  <input
                    type="text"
                    placeholder="Search here..."
                    name="search"
                  />
                  <button value="search" type="submit">
                    <i class="ti-search"></i>
                  </button>
                </form>
              </div>
              <!--/ End Search Form -->
            </div>
            <!--/ End Search Form -->
            <div class="mobile-nav"></div>
          </div>
          <div class="col-lg-8 col-md-7 col-12">
            <div class="search-bar-top">
              <div class="search-bar">
                <form>
                  <input
                    name="search"
                    placeholder="Procure pelos seus produtos..."
                    type="search"
                  />
                  <button class="btnn"><i class="ti-search"></i></button>
                </form>
              </div>
            </div>
          </div>
          <div class="col-lg-2 col-md-3 col-12">
            <div class="right-bar">
              <!-- Search Form -->
              <div class="sinlge-bar">
                <router-link to="/orders" class="single-icon"
                  ><i class="fa fa-heart-o" aria-hidden="true"></i
                ><p>Meus pediddos</p></router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Header Inner -->
    <div class="header-inner">
      <div class="container">
        <div class="cat-nav-head">
          <div class="row">
            <div class="col-lg-9 col-12">
              <div class="menu-area">
                <!-- Main Menu -->
                <nav class="navbar navbar-expand-lg">
                  <div class="navbar-collapse">
                    <div class="nav-inner">
                      <ul class="nav main-menu menu navbar-nav">
                        <li>
                          <router-link to="/home">Home</router-link>
                        </li>
                        <li>
                          <a href="#">Produtos<i class="ti-angle-down"></i></a>
                          <ul class="dropdown">
                            <li>
                              <router-link to="/shopgrid/alimentos"
                                >Alimentos</router-link
                              >
                            </li>
                            <li>
                              <router-link to="/shopgrid/acessorios"
                                >Acessórios</router-link
                              >
                            </li>
                            <li>
                              <router-link to="/shopgrid/limpeza"
                                >Limpeza</router-link
                              >
                            </li>
                            <li>
                              <router-link to="/shopgrid/remedios"
                                >Remédios</router-link
                              >
                            </li>
                          </ul>
                        </li>
                        <li>
                          <router-link to="/cart">Carrinho</router-link>
                        </li>
                        <li>
                          <router-link to="/contact">Contato</router-link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
                <!--/ End Main Menu -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--/ End Header Inner -->
  </header>
</template>

<script>
export default {
  name: "HeaderBase",
};
</script>

