# **Frontend - Autenticación con React**

Este proyecto es un frontend desarrollado en React que consume una API de Django para implementar un sistema de autenticación de usuarios con autenticación de dos factores (2FA) utilizando Google Authenticator.

----------

## **Propósito**

El propósito de este frontend es proporcionar una interfaz de usuario para:

1.  **Registro de usuarios**.
    
2.  **Inicio de sesión**  con autenticación básica (usuario y contraseña).
    
3.  **Configuración de Google Authenticator**  para la autenticación de dos factores (2FA).
    
4.  **Verificación de códigos OTP**  generados por Google Authenticator.
    
5.  **Cierre de sesión**.
    

----------

## **Librerías Utilizadas**

-   **React**: Biblioteca principal para el desarrollo de la interfaz de usuario.
    
-   **React Router DOM**: Para manejar la navegación entre páginas.
    
-   **Axios**: Para hacer solicitudes HTTP a la API de Django.
    
-   **Bootstrap 5**: Para el diseño y la estilización de la interfaz.
    
-   **Bootswatch (Tema Minty)**: Para aplicar un tema visual personalizado a Bootstrap.
    

----------

## **Endpoints Consumidos**

### **1. Registro de Usuarios**

-   **Método**:  `POST`
    
-   **URL**:  `/api/register/`
    
-   **Descripción**: Permite a los usuarios registrarse en la aplicación.
    
-   **Restricciones**:
    
    -   El nombre de usuario y el correo electrónico deben ser únicos.
        
    -   La contraseña debe tener al menos 8 caracteres.
        
-   **Modelo de Negocio**:
    
    -   Envía los datos del formulario de registro a la API.
        
    -   Redirige al usuario a la página de inicio de sesión después de un registro exitoso.
        

----------

### **2. Inicio de Sesión**

-   **Método**:  `POST`
    
-   **URL**:  `/api/login/`
    
-   **Descripción**: Permite a los usuarios iniciar sesión con su nombre de usuario y contraseña.
    
-   **Restricciones**:
    
    -   El usuario debe estar registrado.
        
    -   Las credenciales deben ser válidas.
        
-   **Modelo de Negocio**:
    
    -   Envía las credenciales del usuario a la API.
        
    -   Almacena el token de autenticación en  `localStorage`.
        
    -   Redirige al usuario a  `/qr`  si no tiene un secreto de Google Authenticator configurado.
        
    -   Redirige al usuario a  `/verify-otp`  si ya tiene un secreto configurado.
        

----------

### **3. Generación de Código QR para Google Authenticator**

-   **Método**:  `GET`
    
-   **URL**:  `/api/generate-qr/`
    
-   **Descripción**: Genera un código QR que el usuario puede escanear con Google Authenticator.
    
-   **Restricciones**:
    
    -   El usuario debe estar autenticado.
        
    -   El usuario no debe tener un secreto de Google Authenticator configurado previamente.
        
-   **Modelo de Negocio**:
    
    -   Solicita el código QR a la API.
        
    -   Muestra el código QR en la interfaz para que el usuario lo escanee.
        

----------

### **4. Verificación de Código OTP**

-   **Método**:  `POST`
    
-   **URL**:  `/api/verify-otp/`
    
-   **Descripción**: Verifica el código OTP ingresado por el usuario.
    
-   **Restricciones**:
    
    -   El usuario debe estar autenticado.
        
    -   El usuario debe tener un secreto de Google Authenticator configurado.
        
-   **Modelo de Negocio**:
    
    -   Envía el código OTP ingresado por el usuario a la API.
        
    -   Redirige al usuario a la página principal (`/dashboard`) si el código es válido.
        

----------

### **5. Cierre de Sesión**

-   **Método**:  `POST`
    
-   **URL**:  `/api/logout/`
    
-   **Descripción**: Permite a los usuarios cerrar sesión.
    
-   **Restricciones**:
    
    -   El usuario debe estar autenticado.
        
-   **Modelo de Negocio**:
    
    -   Elimina el token de autenticación del  `localStorage`.
        
    -   Redirige al usuario a la página de inicio de sesión.
        

----------

## **Componentes Principales**

### **1. Registro (`Register`)**

-   **Descripción**: Componente que permite a los usuarios registrarse en la aplicación.
    
-   **Funcionalidades**:
    
    -   Formulario de registro con campos para nombre de usuario, correo electrónico y contraseña.
        
    -   Validación de campos y envío de datos a la API.
        

### **2. Inicio de Sesión (`Login`)**

-   **Descripción**: Componente que permite a los usuarios iniciar sesión.
    
-   **Funcionalidades**:
    
    -   Formulario de inicio de sesión con campos para nombre de usuario y contraseña.
        
    -   Validación de credenciales y envío de datos a la API.
        

### **3. Generación de Código QR (`QRCode`)**

-   **Descripción**: Componente que muestra un código QR para configurar Google Authenticator.
    
-   **Funcionalidades**:
    
    -   Solicita y muestra el código QR generado por la API.
        

### **4. Verificación de Código OTP (`VerifyOTP`)**

-   **Descripción**: Componente que permite a los usuarios verificar su código OTP.
    
-   **Funcionalidades**:
    
    -   Formulario para ingresar el código OTP.
        
    -   Envío del código OTP a la API para su verificación.
        

### **5. Cierre de Sesión (`Logout`)**

-   **Descripción**: Componente que permite a los usuarios cerrar sesión.
    
-   **Funcionalidades**:
    
    -   Elimina el token de autenticación y redirige al usuario a la página de inicio de sesión.
        

### **6. Barra de Navegación (`Navbar`)**

-   **Descripción**: Componente que muestra la barra de navegación.
    
-   **Funcionalidades**:
    
    -   Muestra enlaces dinámicos según el estado de autenticación del usuario.
        

----------

## **Instalación y Ejecución**

1.  **Clonar el repositorio**:
    
    git clone https://github.com/tu-usuario/tu-repositorio.git
    
    cd tu-repositorio/frontend
    
2.  **Instalar dependencias**:
    
    npm install
    
3.  **Ejecutar la aplicación**:
    
    
    npm start
    

----------

## **Contribuciones**

Si deseas contribuir a este proyecto, sigue estos pasos:

1.  Haz un fork del repositorio.
    
2.  Crea una rama para tu contribución (`git checkout -b feature/nueva-funcionalidad`).
    
3.  Realiza tus cambios y haz commit (`git commit -m 'Añadir nueva funcionalidad'`).
    
4.  Haz push a la rama (`git push origin feature/nueva-funcionalidad`).
    
5.  Abre un pull request.
    

----------

## **Licencia**

Este proyecto está bajo la licencia MIT. Para más detalles, consulta el archivo  [LICENSE](https://license/).

----------

¡Gracias por usar este frontend! Si tienes alguna pregunta o sugerencia, no dudes en contactarme. 😊