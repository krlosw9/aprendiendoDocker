const { syncDB } = require("../../tasks/sync-db");

describe('Pruebas en Sync-DB', () =>{
  test('debe de ejecutar el proceso 2 veces', () =>{

    syncDB();
    const time = syncDB();
    console.log("Se llamo ", time);

    
    expect( time ).toBe(2);

  });
});