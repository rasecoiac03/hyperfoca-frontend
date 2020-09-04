<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="8" lg="6" class="mx-auto">
        <social-login title="Você pode entrar" />

        <v-form v-model="valid" ref="form" lazy-validation>
          <v-row>
            <v-col cols="12" sm="6" class="py-0">
              <v-text-field
                v-model="user.email"
                :rules="rules.email"
                type="email"
                label="E-mail"
                placeholder="exemplo@email.com"
                outlined />
            </v-col>

            <v-col cols="12" sm="6" class="py-0">
              <v-text-field
                v-model="user.password"
                :rules="rules.password"
                :type="show.password ? 'text' : 'password'"
                :append-icon="show.password ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="show.password = !show.password"
                label="Senha"
                placeholder="Insira sua senha"
                outlined />
            </v-col>
          </v-row>

          <v-btn color="primary" class="d-block mt-5 mb-10 mx-auto" @click="login">
            Entrar
            <v-icon right>mdi-arrow-right</v-icon>
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import socialLogin from '@/components/social-login'

const required = message => value => !!value || message
const email = message => value => /\S+@\S+\.\S+/.test(value) || message

export default {
  data: () => ({
    user: {
      email: '',
      password: '',
    },
    show: {
      password: false,
    },
    valid: false,
    rules: {
      email: [
        required('Por favor, informe o seu email'),
        email('Informe um email válido'),
      ],
      password: [
        required('Por favor, informe a senha'),
      ],
    },
  }),

  methods: {
    login() {
      this.$refs.form.validate()
    },
  },

  components: {
    socialLogin,
  },
}
</script>
