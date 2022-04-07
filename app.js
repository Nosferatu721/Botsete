const puppeteer = require('puppeteer');
const { Client, Buttons, List, MessageMedia, NoAuth } = require('whatsapp-web.js');
// window.Store.genId = window.Store.MsgKey.newId;

const arr = [
  {
    user: 'elkin.torres',
    password: 'Nosferatu721*',
    minTurno: 5,
    cerrarTurno: Math.ceil(Math.random() * 10) + 35,
    numero: '573134814366',
  },
  {
    user: 'Diego.Rendon',
    password: '!Qwerty28*',
    minTurno: Math.ceil(Math.random() * 14) + 5,
    cerrarTurno: Math.ceil(Math.random() * 10) + 35,
    numero: '573003079207',
  },
];
const arrC = [
  {
    user: 'elkin.torres',
    password: 'Nosferatu721*',
    minTurno: Math.ceil(Math.random() * 14) + 5,
    cerrarTurno: Math.ceil(Math.random() * 10) + 35,
    numero: '573134814366',
  },
  {
    user: 'eyhson.castro',
    password: 'Rpa2022*',
    minTurno: Math.ceil(Math.random() * 14) + 5,
    cerrarTurno: Math.ceil(Math.random() * 10) + 35,
    numero: '573106542257',
  },
  {
    user: 'juan.vargas2',
    password: 'Colombia2022*',
    minTurno: Math.ceil(Math.random() * 14) + 5,
    cerrarTurno: Math.ceil(Math.random() * 10) + 35,
    numero: '573219906245',
  },
  {
    user: 'michel.ibañez',
    password: 'Rpa2022*',
    minTurno: Math.ceil(Math.random() * 14) + 5,
    cerrarTurno: Math.ceil(Math.random() * 10) + 35,
    numero: '573185303259',
  },
  {
    user: 'brayan.yanez1',
    password: 'Rpa2022*',
    minTurno: Math.ceil(Math.random() * 14) + 5,
    cerrarTurno: Math.ceil(Math.random() * 10) + 35,
    numero: '573053599685',
  },
  {
    user: 'RAMON.ROZO',
    password: 'Cos2022*',
    minTurno: Math.ceil(Math.random() * 14) + 5,
    cerrarTurno: Math.ceil(Math.random() * 10) + 35,
    numero: '573102970334',
  },
  {
    user: 'MANUEL.CORDOBA',
    password: 'Colombia2022*',
    minTurno: Math.ceil(Math.random() * 14) + 5,
    cerrarTurno: Math.ceil(Math.random() * 10) + 35,
    numero: '573137485133',
  },
  {
    user: 'Juan.Mendoza',
    password: 'Noxvile99.',
    minTurno: Math.ceil(Math.random() * 14) + 5,
    cerrarTurno: Math.ceil(Math.random() * 10) + 35,
    numero: '573213776554',
  },
  {
    user: 'carlos.santos',
    password: 'Canada76455**',
    minTurno: Math.ceil(Math.random() * 14) + 5,
    cerrarTurno: Math.ceil(Math.random() * 10) + 35,
    numero: '573196431972',
  },
  {
    user: 'david.parra',
    password: 'Colombia22*$',
    minTurno: Math.ceil(Math.random() * 14) + 5,
    cerrarTurno: Math.ceil(Math.random() * 10) + 35,
    numero: '573124640886',
  },
  {
    user: 'daniel.orjuela',
    password: 'Rpa2022*',
    minTurno: Math.ceil(Math.random() * 14) + 5,
    cerrarTurno: Math.ceil(Math.random() * 10) + 35,
    numero: '573194447056',
  },
  {
    user: 'zaira.luna',
    password: 'Colombia123*',
    minTurno: Math.ceil(Math.random() * 14) + 5,
    cerrarTurno: Math.ceil(Math.random() * 10) + 35,
    numero: '573022249441',
  },
  {
    user: 'mario.reyes',
    password: 'Credibanco2023*',
    minTurno: Math.ceil(Math.random() * 14) + 5,
    cerrarTurno: Math.ceil(Math.random() * 10) + 35,
    numero: '573006870762',
  },
  {
    user: 'julian.sanchez1',
    password: 'Juliansanchez0$',
    minTurno: Math.ceil(Math.random() * 14) + 5,
    cerrarTurno: Math.ceil(Math.random() * 10) + 35,
    numero: '573152909024',
  },
  {
    user: 'elquin.cascavita',
    password: 'Emcr2022*',
    minTurno: Math.ceil(Math.random() * 14) + 5,
    cerrarTurno: Math.ceil(Math.random() * 10) + 35,
    numero: '573052905250',
  },
  {
    user: 'Diego.Rendon',
    password: '!Qwerty28*',
    minTurno: Math.ceil(Math.random() * 14) + 5,
    cerrarTurno: Math.ceil(Math.random() * 10) + 35,
    numero: '57',
  },
];
console.log(arr);

// * Funcion pa Logear
const logear = async (usr, forzar = false) => {
  let hoy = new Date(Date.now()),
    hora = hoy.getHours(),
    minutoActual = hoy.getMinutes();

  if ((hora === 7 && minutoActual === usr.minTurno) || forzar) {
    try {
      clientWP.sendMessage(usr.numero + '@c.us', '(☞ﾟヮﾟ)☞ *Logeando* ☜(ﾟヮﾟ☜) ...');
      const browser = await puppeteer.launch({ headless: false, executablePath: '/usr/bin/google-chrome' });
      const page = await browser.newPage();
      await page.setViewport({
        width: 1440,
        height: 800,
        deviceScaleFactor: 1,
      });
      await page.goto('https://mysoul.groupcos.com/login', { timeout: 0, waitUntil: 'load' });

      await page.type('#mat-input-0', usr.user);

      await page.type('#mat-input-1', usr.password);
      await page.click('[mat-raised-button]');

      setTimeout(async () => {
        let logeado = await page.evaluate(() => {
          let elm = document.querySelector('.mat-list-item.mat-focus-indicator.mat-menu-trigger');
          return elm ? true : false;
        });

        if (logeado) {
          console.log(usr.user, 'Logeado', logeado);
          await page.click('.mat-list-item.mat-focus-indicator.mat-menu-trigger');

          const text = await page.evaluate(() => document.querySelector('[mat-menu-item]'));
          if (text === null) {
            clientWP.sendMessage(usr.numero + '@c.us', 'Sin Horarios ╰（‵□′）╯');
            setTimeout(async () => {
              await page.close();
              await browser.close();
            }, 3000);
            return;
          }
          const turnoMarcado = await page.evaluate(() => document.querySelector('[mat-menu-item]').innerHTML.includes('color: green'));
          const classNameJ = await page.evaluate(() => document.querySelector('[mat-menu-item]').className);

          setTimeout(async () => {
            if (turnoMarcado) {
              await page.screenshot({ path: `./img/${usr.user}.png`, fullPage: true });
              console.log('Ya se habia marcado turno ༼ つ ◕_◕ ༽つ');
              clientWP.sendMessage(usr.numero + '@c.us', `Ya se habia marcado turno *${usr.user}* ༼ つ ◕_◕ ༽つ`);
              const media = MessageMedia.fromFilePath(`./img/${usr.user}.png`);
              clientWP.sendMessage(usr.numero + '@c.us', media);
              setTimeout(async () => {
                await page.close();
                await browser.close();
              }, 3000);
            } else {
              setTimeout(async () => {
                await page.click(`.${classNameJ.split(' ').slice(0, 3).join('.')}`);
                setTimeout(async () => {
                  await page.click('.mat-list-item.mat-focus-indicator.mat-menu-trigger');
                  setTimeout(async () => {
                    await page.screenshot({ path: `./img/${usr.user}.png`, fullPage: true });
                    clientWP.sendMessage(usr.numero + '@c.us', `Listo *${usr.user}* se marco turno ༼ つ ◕_◕ ༽つ`);
                    const media = MessageMedia.fromFilePath(`./img/${usr.user}.png`);
                    clientWP.sendMessage(usr.numero + '@c.us', media);
                    console.log('Se supone que marco turno ༼ つ ◕_◕ ༽つ', usr.user);
                    setTimeout(async () => {
                      await page.close();
                      await browser.close();
                    }, 3000);
                  }, 3000);
                }, 3000);
              }, 3000);
            }
          }, 5000);
        } else {
          clientWP.sendMessage(usr.numero + '@c.us', 'Contraseña Incorrecta o SOUL pide cambio de contraseña, Intente otra vez por si las moscas \nEnvia la palabra *PAPITAS* para intentar logear');
        }
      }, 5000);
      return;
    } catch (error) {
      clientWP.sendMessage(usr.numero + '@c.us', 'Hubo un Error ಥ_ಥ');
      console.log('Hubo un Error ಥ_ಥ', error);
      return;
    }
  } else {
    console.log(usr.user, 'No es hora de MARCAR ಠ_ಠ', hora, minutoActual);
    setTimeout(() => {
      logear(usr);
    }, 30000);
  }
};

// * Funcion pa Deslogear
const logout = async (usr) => {
  let hoy = new Date(Date.now()),
    hora = hoy.getHours(),
    minutoActual = hoy.getMinutes();

  if (hora >= 17) {
    clientWP.sendMessage(usr.numero + '@c.us', '(☞ﾟヮﾟ)☞ *Cerrando Turno* ☜(ﾟヮﾟ☜) ...');
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setViewport({
      width: 1440,
      height: 800,
      deviceScaleFactor: 1,
    });
    await page.goto('https://mysoul.groupcos.com/login', { timeout: 0, waitUntil: 'load' });

    await page.type('#mat-input-0', usr.user);

    await page.type('#mat-input-1', usr.password);
    await page.click('[mat-raised-button]');

    setTimeout(async () => {
      let logeado = await page.evaluate(() => {
        let elm = document.querySelector('.mat-list-item.mat-focus-indicator.mat-menu-trigger');
        return elm ? true : false;
      });

      if (logeado) {
        console.log(usr.user, 'Logeado', logeado);
        await page.click('.mat-list-item.mat-focus-indicator.mat-menu-trigger');

        const text = await page.evaluate(() => document.querySelector('[mat-menu-item]'));
        if (text === null) {
          clientWP.sendMessage(usr.numero + '@c.us', 'Sin Horarios ╰（‵□′）╯');
          setTimeout(async () => {
            await page.close();
            await browser.close();
          }, 3000);
          return;
        }
        const turnoMarcado = await page.evaluate(() => document.querySelector('[mat-menu-item]').innerHTML.includes('color: green'));
        const classNameJ = await await page.evaluate(() => document.querySelector('[mat-menu-item]').className);

        setTimeout(async () => {
          if (turnoMarcado) {
            console.log('Pa Cerrar Turno ༼ つ ◕_◕ ༽つ');
            await page.click(`[mat-menu-item]`);
            setTimeout(async () => {
              await page.click(`.swal2-confirm.swal2-styled`);
              setTimeout(async () => {
                await page.click('.mat-list-item.mat-focus-indicator.mat-menu-trigger');
                setTimeout(async () => {
                  await page.screenshot({ path: `./img/${usr.user}.png`, fullPage: true });
                  clientWP.sendMessage(usr.numero + '@c.us', `Has sido expropiado *${usr.user}* jajaja ༼ つ ◕_◕ ༽つ`);
                  const media = MessageMedia.fromFilePath(`./img/${usr.user}.png`);
                  clientWP.sendMessage(usr.numero + '@c.us', media);
                  console.log('Deslogeado', usr.user);
                  setTimeout(async () => {
                    await page.close();
                    await browser.close();
                  }, 3000);
                }, 3000);
              }, 4000);
            }, 3000);
          } else {
            await page.screenshot({ path: `./img/${usr.user}.png`, fullPage: true });
            clientWP.sendMessage(usr.numero + '@c.us', 'Parece que ya habias cerrado turno antes *༼つ◕_◕༽つ*');
            const media = MessageMedia.fromFilePath(`./img/${usr.user}.png`);
            clientWP.sendMessage(usr.numero + '@c.us', media);
            setTimeout(async () => {
              await page.close();
              await browser.close();
            }, 3000);
          }
        }, 5000);
      } else {
        clientWP.sendMessage(usr.numero + '@c.us', 'Contraseña Incorrecta, Intente otra vez por si las moscas');
        setTimeout(async () => {
          await page.close();
          await browser.close();
        }, 3000);
      }
    }, 5000);
    return;
  } else {
    clientWP.sendMessage(usr.numero + '@c.us', 'No es hora de DesLogear ಠ_ಠ Sap@prr ╰（‵□′）╯');
    console.log(usr.user, 'No es hora de DesLogear ಠ_ಠ Sap@prr', hora, minutoActual);
  }
};

// * Iniciar Wasap
const clientWP = new Client({
  puppeteer: {
    headless: false,
    executablePath: '/usr/bin/google-chrome',
  },
  authTimeoutMs: 3600000,
  clientId: 'sesion_mibot',
  authStrategy: new NoAuth(),
});

clientWP.on('qr', (qr) => {
  // console.log('QR RECEIVED', qr);
  qrcode.generate(qr, { small: true });
});

clientWP.on('ready', async () => {
  arr.forEach((usr) => {
    let minut = usr.minTurno < 10 ? `0${usr.minTurno}` : usr.minTurno;
    clientWP.sendMessage(usr.numero + '@c.us', `Que se dice *${usr.user}* el Botsete te marcara turno a las *7:${minut}am*.\n-> El Bot se puede demorar hasta 4 minutos en responder \nCambio y fuera ༼☞◕_◕༽☞`);
    logear(usr);
  });
});

clientWP.on('message', async (msg) => {
  if (msg.type == 'chat' && msg.body == 'PAPITAS') {
    let numeroChat = msg.from.toString().replace('@c.us', '');
    let inList = arr.filter((el) => el.numero === numeroChat);
    if (inList.length >= 1) {
      logear(inList[0], true);
    } else {
      clientWP.sendMessage(msg.from, 'No estas en la lista ╰（‵□′）╯, cualquier cosa por Nequi jajaja');
    }
  }
  if (msg.type == 'chat' && msg.body == 'CHOCLITOS') {
    let numeroChat = msg.from.toString().replace('@c.us', '');
    let inList = arr.filter((el) => el.numero === numeroChat);
    if (inList.length >= 1) {
      logout(inList[0]);
    } else {
      clientWP.sendMessage(msg.from, 'No estas en la lista ╰（‵□′）╯, cualquier cosa por Nequi jajaja');
    }
  }
  if (msg.type == 'chat' && msg.body == 'MENU') {
    const options = arr.map((el) => {
      let obje = { title: el.user };
      return obje;
    });
    const menu = [{ title: 'Opciones:', rows: options }];
    const lista = new List('Users: ', 'Seleccione una opción', menu);
    clientWP.sendMessage(msg.from, lista);
  }
  if (msg.type == 'list_response') {
    console.log(msg.body);
    let inListUser = arr.filter((el) => el.user === msg.body);
    if (inListUser.length >= 1) {
      console.log(inListUser[0]);
      logear(inListUser[0], true);
    } else {
      clientWP.sendMessage(msg.from, 'No estas en la lista ╰（‵□′）╯, cualquier cosa por Nequi jajaja');
    }
  }
});

clientWP.initialize();

// * --- sesión exitosa en wp web
clientWP.on('authenticated', () => {
  console.log(`AUTHENTICATED (sesión exitosa)`);
});

// * --- sesión no exitosa en wp web
clientWP.on('auth_failure', (msg) => {
  // Fired if session restore was unsuccessfull
  console.error(`AUTHENTICATION FAILURE (sesión no exitosa)`, msg);
});
