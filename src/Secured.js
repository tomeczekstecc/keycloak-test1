import React, {useState , useEffect }from 'react';
import Keycloak from 'keycloak-js';
const Secured = () => {

const [keycloak, setKeycloak]= useState(null)
const [authenticated, setAuthenticated]= useState(false)

useEffect(()=>{
    const keycloak = Keycloak('/keycloak.json');
    keycloak.init({ onLoad: 'login-required' }).then((authenticated) => {
      setKeycloak(keycloak)
      setAuthenticated(true);
    });
},[])


    if (keycloak) {
      if (authenticated)
        return (
          <div>
            <p>
              To jest zabezpieczony komponent
            </p>
          </div>
        );
      else return <div>Brak dostępu</div>;
    }
    return <div>Sprawdzanie uprawnień</div>;

};

export default Secured;
