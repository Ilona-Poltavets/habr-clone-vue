<script setup lang="ts">
function handleFocus() {
  const monkey = document.getElementById('funny-monkey')
  if (monkey) {
    monkey.classList.add('close-face')
  }
}
function handleBlur() {
  const monkey = document.getElementById('funny-monkey')
  if (monkey) {
    monkey.classList.remove('close-face')
  }
}
</script>

<template>
  <link rel="stylesheet" href="https://unicons.iconscout.com/release/v2.1.9/css/unicons.css" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css"
  />
  <main class="bg-gray-100 dark:bg-gray-900 login-page">
    <div class="section">
      <div class="container">
        <div class="row full-height justify-content-center">
          <div class="col-12 text-center align-self-center py-5">
            <div class="section pb-5 pt-5 pt-sm-2 text-center">
              <h6 class="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
              <input class="checkbox" type="checkbox" id="reg-log" name="reg-log" />
              <label for="reg-log"></label>
              <div class="card-3d-wrap mx-auto">
                <div class="card-3d-wrapper">
                  <div class="card-front">
                    <div class="center-wrap">
                      <div class="section text-center">
                        <h4 class="mb-4 pb-3">Log In</h4>
                        <div class="form-group">
                          <input type="email" class="form-style" placeholder="Email" />
                          <i class="input-icon uil uil-at"></i>
                        </div>
                        <div class="form-group mt-2">
                          <input
                            type="password"
                            class="form-style"
                            placeholder="Password"
                            @focus="handleFocus"
                            @blur="handleBlur"
                          />
                          <i class="input-icon uil uil-lock-alt"></i>
                        </div>
                        <a href="" class="btn mt-4">Login</a>
                        <p class="mb-0 mt-4 text-center">
                          <a href="" class="link">Forgot your password?</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="card-back">
                    <div class="center-wrap">
                      <div class="section text-center">
                        <h4 class="mb-3 pb-3">Sign Up</h4>
                        <div class="form-group">
                          <input type="text" class="form-style" placeholder="Full Name" />
                          <i class="input-icon uil uil-user"></i>
                        </div>
                        <div class="form-group mt-2">
                          <input type="tel" class="form-style" placeholder="Phone Number" />
                          <i class="input-icon uil uil-phone"></i>
                        </div>
                        <div class="form-group mt-2">
                          <input type="email" class="form-style" placeholder="Email" />
                          <i class="input-icon uil uil-at"></i>
                        </div>
                        <div class="form-group mt-2">
                          <input
                            type="password"
                            class="form-style"
                            placeholder="Password"
                            @focus="handleFocus"
                            @blur="handleBlur"
                          />
                          <i class="input-icon uil uil-lock-alt"></i>
                        </div>
                        <a href="" class="btn mt-4">Register</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="funny-monkey">
      <div class="monkey-normal">
        <img src="@/assets/img/Hear_No_Evil_Monkey_Emoji_grande.webp" alt="Funny Monkey" />
      </div>
      <div class="monkey-secret">
        <img src="@/assets/img/See_No_Evil_Monkey_Emoji_large.webp" alt="Funny Monkey" />
      </div>
    </div>
  </main>
</template>
