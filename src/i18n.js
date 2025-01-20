import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "Sign In": "Sign In",
      Philippines: "Philippines",
      Global: "Global",
      Movies: "Movies",
      "Tv series": "TV series",

      "Trending Now": "Trending Now",
      "More Reasons to Join": "More Reasons to Join",
      "Frequently Asked Questions": "Frequently Asked Questions",

      "Unlimited movies, TV shows, and more":
        "Unlimited movies, TV shows, and more",
      "Starts at $3. Cancel Anytime": "Starts at $3. Cancel Anytime",
      "Ready to watch? Enter your email to create or restart your membership":
        "Ready to watch? Enter your email to create or restart your membership",
      "Email Address": "Email Address",
      "Get Started": "Get Started",
      "Watch Trailer": "Watch Trailer",
      Details: "Details",
      "More Reasons to Join": "More Reasons to Join",
      "Stream on Any Device, Anytime": "Stream on Any Device, Anytime",
      "Stream on Any Device, Anytime description":
        "Access your account and stream content across multiple devices",
      "Enjoy Uninterrupted Viewing": "Enjoy Uninterrupted Viewing",
      "Enjoy Uninterrupted Viewing description":
        "Say goodbye to ads! Enjoy an ad-free streaming experience so you can watch your favorite content without any interruptions",
      "Take Your Shows Anywhere": "Take Your Shows Anywhere",
      "Take Your Shows Anywhere description":
        "Download your favorite movies and TV shows to enjoy offline, so you never miss out on entertainment",
      "Enjoy Crystal Clear Streaming": "Enjoy Crystal Clear Streaming",
      "Enjoy Crystal Clear Streaming description":
        "Experience seamless viewing with high-quality video and audio on any device, from your phone to your TV",

      "What is Flicksy?": "What is Flicksy?",
      "Where can I watch?": "Where can I watch?",
      "What can I watch on Flicksy?": "What can I watch on Flicksy?",
      "Is Flicksy good for kids?": "Is Flicksy good for kids?",
      "Flicksy is a streaming service that provides access to movies, shows, and documentaries":
        "Flicksy is a streaming service that provides access to movies, shows, and documentaries",
      "You can watch Flicksy on your smart TV, laptop, tablet, or phone":
        "You can watch Flicksy on your smart TV, laptop, tablet, or phone",
      "On Flicksy, you can watch a variety of genres including action, drama, comedy, and documentaries":
        "On Flicksy, you can watch a variety of genres including action, drama, comedy, and documentaries",
      "Yes, Flicksy offers a variety of kid-friendly content including cartoons, animated movies, and family-friendly shows":
        "Yes, Flicksy offers a variety of kid-friendly content including cartoons, animated movies, and family-friendly shows",

      "Questions? Contact Us": "Questions? Contact Us",
      FAQ: "FAQ",
      "Help Center": "Help Center",
      Account: "Account",
      "Media Center": "Media Center",
      "Investor Relations": "Investor Relations",
      Jobs: "Jobs",
      "Redeem Gift Cards": "Redeem Gift Cards",
      "Buy Gift Cards": "Buy Gift Cards",
      "Ways to Watch": "Ways to Watch",
      "Terms of Use": "Terms of Use",
      Privacy: "Privacy",
      "Cookie Preferences": "Cookie Preferences",
      "Corporate Information": "Corporate Information",
      "Contact Us": "Contact Us",
      "Speed Test": "Speed Test",
      "Legal Notices": "Legal Notices",
      "Only on Netflix": "Only on Netflix",

      "Welcome Back": "Welcome Back",
      "Don't have an account?": "Don't have an account?",
      "Sign up": "Sign up",
      Password: "Password",
      "or sign in with": "or sign in with",
      "Forgot Password?": "Forgot Password?",

      "Create an account": "Create an account",
      "Already have an account?": "Already have an account?",
      "Sign in": "Sign in",
      "Confirm Password": "Confirm Password",
      "Sign Up": "Sign Up",
      "or sign up with": "or sign up with",
      "Enter Password": "Enter Password",

      "This design was created in Figma, and all credits are attributed to the original creator":
        "This design was created in Figma, and all credits are attributed to the original creator",
      "You can visit the design link": "You can visit the design link",
      myself: "myself",
      here: "here",
    },
  },
  es: {
    translation: {
      "Sign In": "Iniciar sesión",

      Global: "Global",
      Movies: "Películas",
      "Tv series": "Series de TV",
      Philippines: "Filipinas",

      "Trending Now": "Lo más popular ahora",
      "More Reasons to Join": "Más razones para unirte",
      "Frequently Asked Questions": "Preguntas Frecuentes",

      "Starts at $3. Cancel Anytime":
        "Empieza desde $3. Cancela en cualquier momento",
      "Unlimited movies, TV shows, and more":
        "Películas, series de TV y mucho más ilimitado",
      "Ready to watch? Enter your email to create or restart your membership":
        "¿Listo para ver? Ingresa tu correo electrónico para crear o reactivar tu membresía",
      "Email Address": "Dirección de correo electrónico",
      "Get Started": "Comienza",
      "Watch Trailer": "Ver tráiler",
      Details: "Detalles",
      "More Reasons to Join": "Más razones para unirte",
      "Stream on Any Device, Anytime":
        "Transmite en cualquier dispositivo, en cualquier momento",
      "Stream on Any Device, Anytime description":
        "Accede a tu cuenta y transmite contenido en múltiples dispositivos",
      "Enjoy Uninterrupted Viewing":
        "Disfruta de una visualización ininterrumpida",
      "Enjoy Uninterrupted Viewing description":
        "¡Di adiós a los anuncios! Disfruta de una experiencia de transmisión sin anuncios para que puedas ver tu contenido favorito sin interrupciones",
      "Take Your Shows Anywhere": "Lleva tus programas a todas partes",
      "Take Your Shows Anywhere description":
        "Descarga tus películas y programas de TV favoritos para disfrutarlos sin conexión, para que nunca te pierdas el entretenimiento",
      "Enjoy Crystal Clear Streaming":
        "Disfruta de una transmisión de calidad cristalina",
      "Enjoy Crystal Clear Streaming description":
        "Experimenta una visualización perfecta con video y audio de alta calidad en cualquier dispositivo, desde tu teléfono hasta tu TV",

      "What is Flicksy?": "¿Qué es Flicksy?",
      "Where can I watch?": "¿Dónde puedo ver?",
      "What can I watch on Flicksy?": "¿Qué puedo ver en Flicksy?",
      "Is Flicksy good for kids?": "¿Es Flicksy bueno para los niños?",
      "Flicksy es un servicio de streaming que proporciona acceso a películas, series y documentales":
        "Flicksy es un servicio de streaming que proporciona acceso a películas, series y documentales",
      "You can watch Flicksy on your smart TV, laptop, tablet, or phone":
        "Puedes ver Flicksy en tu smart TV, laptop, tablet o teléfono",
      "On Flicksy, you can watch a variety of genres including action, drama, comedy, and documentaries":
        "En Flicksy, puedes ver una variedad de géneros incluyendo acción, drama, comedia y documentales",
      "Yes, Flicksy offers a variety of kid-friendly content including cartoons, animated movies, and family-friendly shows":
        "Sí, Flicksy ofrece una variedad de contenido apto para niños, incluyendo dibujos animados, películas animadas y programas familiares",

      "Questions? Contact Us": "¿Preguntas? Contáctanos",
      FAQ: "Preguntas Frecuentes",
      "Help Center": "Centro de Ayuda",
      Account: "Cuenta",
      "Media Center": "Centro de Medios",
      "Investor Relations": "Relaciones con Inversores",
      Jobs: "Empleos",
      "Redeem Gift Cards": "Canjear Tarjetas de Regalo",
      "Buy Gift Cards": "Comprar Tarjetas de Regalo",
      "Ways to Watch": "Formas de Ver",
      "Terms of Use": "Términos de Uso",
      Privacy: "Privacidad",
      "Cookie Preferences": "Preferencias de Cookies",
      "Corporate Information": "Información Corporativa",
      "Contact Us": "Contáctanos",
      "Speed Test": "Prueba de Velocidad",
      "Legal Notices": "Avisos Legales",
      "Only on Netflix": "Solo en Netflix",

      "Welcome Back": "Bienvenido de nuevo",
      "Don't have an account?": "¿No tienes una cuenta?",
      "Sign up": "Regístrate",
      Password: "Contraseña",
      "or sign in with": "o inicia sesión con",
      "Forgot Password?": "¿Olvidaste tu contraseña?",

      "Create an account": "Crear una cuenta",
      "Already have an account?": "¿Ya tienes una cuenta?",
      "Sign in": "Iniciar sesión",
      "Confirm Password": "Confirmar contraseña",
      "Sign Up": "Regístrate",
      "or sign up with": "o regístrate con",
      "Enter Password": "Ingresa la contraseña",

      "This design was created in Figma, and all credits are attributed to the original creator":
        "Este diseño fue creado en Figma, y todos los créditos son atribuidos al creador original",
      "You can visit the design link": "Puedes visitar el enlace del diseño",
      myself: "yo mismo",
      here: "aquí",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
