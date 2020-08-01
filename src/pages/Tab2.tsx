import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonCard, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>PLAY AGAIN</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Luv Me Valentine Candy Sweet Words...</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 2 page" />

        <h2>Keep close to Nature's heart... and break clear away, once in awhile,
        and climb a mountain or spend a week in the woods. Wash your spirit clean.
     </h2>
       
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
