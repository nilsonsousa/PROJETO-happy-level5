const Database = require("./db");
const saveOrphanage = require("./saveOrphanage");

Database.then(async (db) => {
  //inserir dados na tabela
    await saveOrphanage(db, {
        lat: "-27.2207926",
        lng: "-49.6548481",
        name: "lar dos meninos",
        about:
          "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp:  "93084",
        images: [
          "https://images.unsplash.com/photo-1598971862093-42c04c83871a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8aWR8fHx8fHwxNjI2NjYzMDc5&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    
          "https://images.unsplash.com/photo-1626103989191-05f5e081e0bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8aWR8fHx8fHwxNjI2NjYzMTMw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        ].toString(),
        instructions:"Venha como se sentir a vontade e traga muito amor e paciência para dar",
        opening_hours: "Horário de visitas Das 18h até 8h",
        open_on_weekends: "0"
      })
  
  //consultar dados da tabela
  const selectedOrphanages = await db.all("SELECT * FROM orphanages")
  console.log(selectedOrphanages)

  //consultar somente 1 orfanato, pelo id
   //const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2" ')
   //console.log(orphanage)

  //deletar dados da tabela
  //console.log(await db.run("DELETE FROM orphanages WHERE id = '3'"))
  
});




