import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import FormField from "../../components/FormField";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import { Fontisto } from '@expo/vector-icons';
import { router } from 'expo-router'
import { useDimensionContext } from "../../context/DimensionProvider";

const login = () => {
  const { isTablet } = useDimensionContext()

  return (
    <SafeAreaView className={`justify-center  items-center bg-white  h-full`}>
      <View className="w-full  flex-row justify-end  pr-5  ">
        <PrimaryButton
          handlePress={() => router.replace("/profile")}
          containerStyles={`${isTablet() ? 'w-[170px] h-[70px]' : 'w-[130px]  h-[45px]'}  rounded-2xl border-regularGray`}
          text="s' inscrire"
          textStyles={`text-red ${isTablet() ? 'text-2xl' : 'text-[17px]'}`}
        />
      </View>
      <Text className={`${isTablet() ? 'text-4xl' : 'text-xl'} font-dBold text-thickGray  p-10`}> CONNEXION </Text>
      <View style={{ gap: 10 }}>
        <FormField 
          containerStyles={`${isTablet() ? 'w-[500px] h-[80px] text-2xl pl-5' : ''}`}
        />

        <FormField 
          containerStyles={`${isTablet() ? 'w-[500px] h-[80px] text-2xl pl-5' : ''}`}
        />

        <PrimaryButton
          containerStyles={`${isTablet() ? 'w-[500px]' : 'w-[300px]'}  rounded-2xl  bg-thickViolet `}
          text={` SE CONNECTER `}
          textStyles={`text-white ${isTablet() ? 'text-3xl' : 'text-xl'}`}
          handlePress={() => router.replace('/study')}
        />

        <View className="flex-row mt-5 items-center justify-center" style={{ gap: 10 }}>
        <PrimaryButton
            containerStyles={`${isTablet() ? 'w-[220px] h-[70px]' : 'w-[150px]  h-[60px]'} rounded-2xl border-regularGray`}
            text="FACEBOOK"
            textStyles={`text-red ${isTablet() ? 'text-2xl' : 'text-[17px]'}`}
          />

          <PrimaryButton
            containerStyles={`${isTablet() ? 'w-[220px] h-[70px]' : 'w-[150px]  h-[60px]'} rounded-2xl border-regularGray`}
            text="GOOGLE"
            textStyles={`text-red ${isTablet() ? 'text-2xl' : 'text-[17px]'}`}
          />
        </View>
      </View>
      <View className={`mt-8 ${isTablet() ? 'w-[500px]' : 'w-[300px]'}`}
      >
        <Text className={`text-regularGray  font-dBold text-center  p-3 ${isTablet() ? 'text-2xl' : ''}`}>
          En te connectant mindy, tu aceptes nos conditions d'utilisation et
          notre Politique de Confidentialite.
        </Text>
        <Text className={`text-regularGray  font-dBold text-center  p-3 ${isTablet() ? 'text-2xl' : ''}`}>
          Ce site est protege par reCAPTCHA Entreprise. La Politique se
          Cconfidentialite et les Cconditions de google s'appliquent
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default login;
