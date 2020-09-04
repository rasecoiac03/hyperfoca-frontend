<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="8" lg="6" class="mx-auto">
        <social-login title="Faça seu cadastro" />

        <v-form v-model="valid" ref="form" lazy-validation>
          <v-row>
            <v-col cols="12" sm="6" class="py-0">
              <v-text-field
                v-model="user.name"
                :rules="rules.name"
                type="text"
                label="Qual é o seu nome?"
                placeholder="Nome e Sobrenome"
                outlined />
            </v-col>

            <v-col cols="12" sm="6" class="py-0">
              <v-text-field
                v-model="user.email"
                :rules="rules.email"
                type="email"
                label="E o seu e-mail?"
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
                label="Agora é só criar uma senha"
                placeholder="Senha (mínimo 5 caracteres)"
                outlined />
            </v-col>

            <v-col cols="12" sm="6" class="py-0">
              <v-text-field
                v-model="user.passwordConfirmation"
                :rules="passwordConfirmationRules"
                :type="show.passwordConfirmation ? 'text' : 'password'"
                :append-icon="show.passwordConfirmation ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="show.passwordConfirmation = !show.passwordConfirmation"
                label="Confirme a sua senha"
                placeholder="Repita a sua senha"
                outlined />
            </v-col>

            <v-col cols="12" md="auto" class="py-0">
              <v-checkbox v-model="user.acceptedTerms" :rules="rules.acceptedTerms" dense class="my-0">
                <template slot="label">
                  <span>
                    Eu li e aceito os <a class="blue--text">Termos e Condições de uso</a>.
                  </span>
                </template>
              </v-checkbox>
            </v-col>

            <v-col cols="12" md="auto" class="py-0">
              <v-checkbox v-model="user.acceptedPrivacy" :rules="rules.acceptedTerms" dense class="my-0">
                <template slot="label">
                  <span>
                    Eu também li e concordo com a <a class="blue--text">Política de Privacidade</a>.
                  </span>
                </template>
              </v-checkbox>
            </v-col>
          </v-row>

          <v-btn color="primary" class="d-block mt-5 mx-auto" @click="singup">
            Fazer cadastro
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
const minValue = (message, length) => value => (value.length >= length) || message
const email = message => value => /\S+@\S+\.\S+/.test(value) || message

export default {
  data: () => ({
    user: {
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      acceptedTerms: false,
      acceptedPrivacy: false,
    },
    show: {
      password: false,
      passwordConfirmation: false,
    },
    valid: false,
    rules: {
      name: [
        required('Por favor, informe o seu nome'),
        minValue('Por favor, informe o seu nome', 3),
      ],
      email: [
        required('Por favor, informe o seu email'),
        email('Informe um email válido'),
      ],
      password: [
        required('Por favor, informe a senha'),
        minValue('A senha precisa ter no mínimo 6 caracteres', 6),
      ],
      acceptedTerms: [required('É preciso aceitar os Termos')],
      acceptedPrivacy: [required('É preciso aceitar a Política')],
    },
  }),

  computed: {
    passwordConfirmationRules() {
      const match = () => (this.user.password === this.user.passwordConfirmation) || 'As senhas precisam ser iguais'
      return [...this.rules.password, match]
    },
  },

  methods: {
    singup() {
      this.$refs.form.validate()
    },
  },

  components: {
    socialLogin,
  },
}
</script>
