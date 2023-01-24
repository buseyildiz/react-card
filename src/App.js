import React from 'react'
import Card from './Card'

function App() {
  return (
    <div className="wrapper">
      <Card 
      img="https://upload.wikimedia.org/wikipedia/tr/6/61/HarryPotterOotP.jpg"
      title="Harry Potter"
      description="Avada Kedavra’dan kurtulan tek kişi.Gryffindor Quidditch takımının kaptanı. Babası James Potter, Annesi Lily Evans.
      Patronusu çatalboynuzlu geyikti."
      />

      <Card 
      img="https://www.sihirdukkani.com/wp-content/uploads/2020/11/blog04__0003_Layer-7-600x400-1.jpg"
      title="Hermione Granger"
      description="Harry’nin en yakın 2 arkadaşından birisi. Muggle doğumludur.  Okulun en iyi öğrencilerinden biriydi.
      Patronusu su samuruydu."
      />

      <Card 
      img="https://www.sihirdukkani.com/wp-content/uploads/2020/11/blog04__0002_Layer-8-600x400-1.jpg"
      title="Ron Weasley"
      description=" Harry’nin en yakın ikinci arkadaşı.Muhteşem bir satranç oyuncusu. Harry’nin en sadık dostu. Hermione’nin eşi, Rose Weasley’in babası.
      Patronusu Jack Russell Teriyer köpeğiydi."
      />
   
    </div>
  );
}

export default App;
