import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import { StatusBar } from 'expo-status-bar'
import { TextInput, Button } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { HandleSignIn } from '../../../redux/Services/firebaseActions'



const loginSchema = yup.object().shape({
  email: yup
    .string()
    .label('email')
    .email()
    .required(),
  password: yup
    .string()
    .label('password')
    .required()
    .min(6, "Seems a bit shot...")
    .max(12, "Too long, try a shot password")
})


const Login = () => {
  const [visiblePassword, setVisiblePassword] = React.useState(false);
  const [buttonLoading, setButtonLoading] = React.useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const showPassword = () => {
    setVisiblePassword(!visiblePassword)
  }
  const handleLoginLoading = () => {
    setButtonLoading(true);
  }

  return (
    <View style={styles.container}>
      <StatusBar translucent={false} backgroundColor='white' />
      <Image source={require('../../../assets/Logo.png')} style={styles.logo} />
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={loginSchema}
        onSubmit={(values, action) => {
            dispatch(HandleSignIn(values, navigation, setButtonLoading))
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <>
            <TextInput
              label="Email"
              activeOutlineColor='#3797EF'
              outlineColor='#0000001a'
              value={values.email}
              style={styles.inputField}
              onChangeText={handleChange('email')}
              mode='outlined'
              onBlur={handleBlur('email')}
            />
            {touched.email && errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

            <TextInput
              label="Password"
              secureTextEntry={!visiblePassword}
              outlineColor='#0000001a'
              activeOutlineColor='#3797EF'
              mode='outlined'
              value={values.password}
              style={styles.inputField}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              right={<TextInput.Icon icon={visiblePassword ? "eye" : 'eye-off'} onPress={showPassword} />}
            />
            {touched.password && errors.password && <Text style={styles.errorText}>{errors.password} </Text>}
            <View style={styles.forgotPassword}>
              <TouchableOpacity style={{ padding: 5 }}>
                <Text style={{ color: "#3797EF" }}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
              <Button buttonColor='#3797EF' loading={buttonLoading} mode="contained" onPress={() => handleSubmit(values)} >
                Log in
              </Button>
            </View>
          </>
        )}
      </Formik>

      <TouchableOpacity style={styles.googleLogin}>
        <>
          <AntDesign name="google" size={20} color="#3797EF" />
          <Text style={{ color: '#3797EF' }}>Continue with Google</Text>
        </>
      </TouchableOpacity>

      <View style={styles.hrMain}>
        <View style={styles.hr}></View>
        <Text style={styles.orText}>OR</Text>
        <View style={styles.hr}></View>
      </View>

      <View style={styles.noAccount}>
        <View>
          <Text >Don't have an account? </Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('signup')}><Text style={{ color: "#3797EF" }}>Sign up</Text></TouchableOpacity>
        </View>

      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 30
  },
  logo: {
    marginBottom: 30,
  },
  inputField: {
    width: '100%',
  },
  errorText: {
    color: 'red'
  },
  forgotPassword: {
    width: '100%',
    alignItems: "flex-end",
    marginTop: 15,
  },
  buttonContainer: {
    height: 50,
    width: '100%',
    marginVertical: 10,
  },
  googleLogin: {
    flexDirection: 'row',
    gap: 7,
    padding: 5,
    marginBottom: 20
  },
  hrMain: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25
  },
  hr: {
    borderBottomWidth: 1,
    borderColor: "#0000001a",
    flex: 1,
  },
  orText: {
    marginHorizontal: 20,
    fontSize: 12,

  },
  noAccount: {
    flexDirection: 'row',
    justifyContent: 'center',
    // backgroundColor:"orange",
    padding: 5
  }

})