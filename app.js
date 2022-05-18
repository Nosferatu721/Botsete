const puppeteer = require('puppeteer');
const os = require('os');
const colors = require('colors')
const { spawn } = require('child_process');
const { Client, Buttons, List, MessageMedia, LocalAuth } = require('whatsapp-web.js');

const marcarTurnoRandom = () => Math.ceil(Math.random() * 15) + 5;
const cerrarTurnoRandom = () => Math.ceil(Math.random() * 10) + 36;

const arrC = [
  {
    user: 'elkin.torres',
    password: 'Papitas8122-',
    minTurno: marcarTurnoRandom(),
    cerrarTurno: cerrarTurnoRandom(),
    numero: '573134814366',
  },
];
const arrD = [
  {
    user: 'Diego.Rendon',
    password: 'Papitas5391-',
    minTurno: marcarTurnoRandom(),
    cerrarTurno: cerrarTurnoRandom(),
    numero: '573003079207',
  },
];
const arr = [
  {
    user: 'elkin.torres',
    password: 'Papitas8122-',
    minTurno: marcarTurnoRandom(),
    cerrarTurno: cerrarTurnoRandom(),
    numero: '573134814366',
  },
  {
    user: 'eyhson.castro',
    password: 'Papitas9451-',
    minTurno: marcarTurnoRandom(),
    cerrarTurno: cerrarTurnoRandom(),
    numero: '573106542257',
  },
  {
    user: 'juan.vargas2',
    password: 'Papitas8653-',
    minTurno: marcarTurnoRandom(),
    cerrarTurno: cerrarTurnoRandom(),
    numero: '573219906245',
  },
  {
    user: 'brayan.yanez1',
    password: 'Papitas1086-',
    minTurno: marcarTurnoRandom(),
    cerrarTurno: cerrarTurnoRandom(),
    numero: '573053599685',
  },
  {
    user: 'RAMON.ROZO',
    password: 'Papitas4896-',
    minTurno: marcarTurnoRandom(),
    cerrarTurno: cerrarTurnoRandom(),
    numero: '573102970334',
  },
  {
    user: 'MANUEL.CORDOBA',
    password: 'Papitas3054-',
    minTurno: marcarTurnoRandom(),
    cerrarTurno: cerrarTurnoRandom(),
    numero: '573137485133',
  },
  {
    user: 'Juan.Mendoza',
    password: 'Papitas1318-',
    minTurno: marcarTurnoRandom(),
    cerrarTurno: cerrarTurnoRandom(),
    numero: '573213776554',
  },
  {
    user: 'carlos.santos',
    password: 'Papitas7013-',
    minTurno: marcarTurnoRandom(),
    cerrarTurno: cerrarTurnoRandom(),
    numero: '573196431972',
  },
  {
    user: 'daniel.orjuela',
    password: 'Papitas2799-',
    minTurno: marcarTurnoRandom(),
    cerrarTurno: cerrarTurnoRandom(),
    numero: '573194447056',
  },
  {
    user: 'zaira.luna',
    password: 'Papitas7074-',
    minTurno: marcarTurnoRandom(),
    cerrarTurno: cerrarTurnoRandom(),
    numero: '573022249441',
  },
  {
    user: 'mario.reyes',
    password: 'Papitas139-',
    minTurno: marcarTurnoRandom(),
    cerrarTurno: cerrarTurnoRandom(),
    numero: '573006870762',
  },
  {
    user: 'julian.sanchez1',
    password: 'Papitas9281-',
    minTurno: marcarTurnoRandom(),
    cerrarTurno: cerrarTurnoRandom(),
    numero: '573152909024',
  },
  {
    user: 'elquin.cascavita',
    password: 'Papitas8795-',
    minTurno: marcarTurnoRandom(),
    cerrarTurno: cerrarTurnoRandom(),
    numero: '573052905250',
  },
  {
    user: 'Diego.Rendon',
    password: 'Papitas5391-',
    minTurno: marcarTurnoRandom(),
    cerrarTurno: cerrarTurnoRandom(),
    numero: '573003079207',
  },
  {
    user: 'JUAN.CASTA12',
    password: 'Papitas8753-',
    minTurno: marcarTurnoRandom(),
    cerrarTurno: cerrarTurnoRandom(),
    numero: '573016650947',
  },
  {
    user: 'roger.rodri',
    password: 'Papitas8803-',
    minTurno: marcarTurnoRandom(),
    cerrarTurno: cerrarTurnoRandom(),
    numero: '573125634645',
  },
  {
    user: 'leon.gomez',
    password: 'Papitas775-',
    minTurno: marcarTurnoRandom(),
    cerrarTurno: cerrarTurnoRandom(),
    numero: '573013775932',
  },
  {
    user: 'KAREN.HERNANDEZ',
    password: 'Papitas3212-',
    minTurno: marcarTurnoRandom() + 35,
    cerrarTurno: cerrarTurnoRandom() + 12,
    numero: '573192927421',
  },
];
arr.forEach((el) => console.log(`${el.minTurno} ---- ${el.cerrarTurno} \t${el.user}`.brightGreen.italic));

// * Funcion pa Logear
const logear = async (usr, forzar = false, reintentar = false) => {
  let hoy = new Date(Date.now()),
    hora = hoy.getHours(),
    minutoActual = hoy.getMinutes();

  if (usr.user === 'KAREN.HERNANDEZ' && hora === 6 && minutoActual === usr.minTurno) forzar = true;

  if ((hora === 7 && minutoActual === usr.minTurno) || forzar) {
    try {
      clientWP.sendMessage(usr.numero + '@c.us', '(☞ﾟヮﾟ)☞ *Logeando* ☜(ﾟヮﾟ☜) ...');
      const browser = await puppeteer.launch({ headless: false, executablePath: os.platform() === 'linux' ? '/usr/bin/google-chrome' : 'C:/Program Files/Google/Chrome/Application/chrome.exe' });
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

        setTimeout(async () => {
          if (logeado) {
            console.log(usr.user, 'Logeado', logeado);
            await page.click('.mat-list-item.mat-focus-indicator.mat-menu-trigger');

            const text = await page.evaluate(() => document.querySelector('[mat-menu-item]'));
            if (text === null) {
              clientWP.sendMessage(usr.numero + '@c.us', 'Sin Horarios *╰（‵□′）╯*');
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
                console.log('Ya se habia marcado turno *༼つ◕_◕༽つ*');
                clientWP.sendMessage(usr.numero + '@c.us', `Ya se habia marcado turno *${usr.user}* *༼つ◕_◕༽つ*`);
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
                      // await page.screenshot({ path: `./img/${usr.user}.png`, fullPage: true });
                      clientWP.sendMessage(usr.numero + '@c.us', `*${usr.user}* se marco turno ༼つ◕_◕༽つ`);
                      // const media = MessageMedia.fromFilePath(`./img/${usr.user}.png`);
                      // clientWP.sendMessage(usr.numero + '@c.us', media);
                      console.log('Se supone que marco turno *༼つ◕_◕༽つ*', usr.user);
                      setTimeout(async () => {
                        await page.close();
                        await browser.close();
                      }, 4000);
                    }, 4000);
                  }, 4000);
                }, 3000);
              }
            }, 5000);
          } else {
            clientWP.sendMessage(usr.numero + '@c.us', '♦♣ Se peto el Google');
            setTimeout(async () => {
              await page.close();
              await browser.close();
              if (!reintentar) {
                clientWP.sendMessage(usr.numero + '@c.us', '♦♣ *Intentando Marcar ...*');
                logear(usr, true, true);
              }
            }, 3000);
          }
        }, 3000);
      }, 5000);
      return;
    } catch (error) {
      clientWP.sendMessage(usr.numero + '@c.us', '♦♣ Hubo un Error ಥ_ಥ');
      console.log('Hubo un Error ಥ_ಥ', error);
      return;
    }
  } else {
    // console.log(usr.user, 'No es hora de MARCAR ಠ_ಠ', hora, minutoActual);
    setTimeout(() => {
      logear(usr);
    }, 30000);
  }
};

// * Funcion pa Deslogear
const logout = async (usr, forzar = false, reintentar = false) => {
  let hoy = new Date(Date.now()),
    hora = hoy.getHours(),
    horaCerrar = 17,
    minutoActual = hoy.getMinutes();

  if (hora < 15) return
  if (usr.user === 'Diego.Rendon') horaCerrar = 18;
  if ((hora === horaCerrar && minutoActual === usr.cerrarTurno) || forzar) {
    try {
      clientWP.sendMessage(usr.numero + '@c.us', '(☞ﾟヮﾟ)☞ *Cerrando Turno* ☜(ﾟヮﾟ☜) ...');
      const browser = await puppeteer.launch({ headless: false, executablePath: os.platform() === 'linux' ? '/usr/bin/google-chrome' : 'C:/Program Files/Google/Chrome/Application/chrome.exe' });
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

        setTimeout(async () => {
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
                console.log('Pa Cerrar Turno *༼つ◕_◕༽つ*');
                await page.click(`[mat-menu-item]`);
                setTimeout(async () => {
                  await page.click(`.swal2-confirm.swal2-styled`);
                  setTimeout(async () => {
                    await page.click('.mat-list-item.mat-focus-indicator.mat-menu-trigger');
                    setTimeout(async () => {
                      // await page.screenshot({ path: `./img/${usr.user}.png`, fullPage: true });
                      clientWP.sendMessage(usr.numero + '@c.us', `Turno Cerrado *${usr.user}* *༼つ◕_◕༽つ*`);
                      // const media = MessageMedia.fromFilePath(`./img/${usr.user}.png`);
                      // clientWP.sendMessage(usr.numero + '@c.us', media);
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
            clientWP.sendMessage(usr.numero + '@c.us', '♦♣ Se peto el Google');
            setTimeout(async () => {
              await page.close();
              await browser.close();
              if (!reintentar) {
                clientWP.sendMessage(usr.numero + '@c.us', '♦♣ *Intentando Cerrar ...*');
                logout(usr, true, true);
              }
            }, 3000);
          }
        }, 3000);
      }, 5000);
      return;
    } catch (error) {
      clientWP.sendMessage(usr.numero + '@c.us', '♦♣ Hubo un Error ಥ_ಥ');
      console.log('Hubo un Error ಥ_ಥ', error);
      return;
    }
  } else {
    // console.log(usr.user, 'No es hora de CERRAR TURNO ಠ_ಠ Sap@prr', hora, minutoActual);
    setTimeout(() => {
      logout(usr);
    }, 30000);
  }
};

// * Cambiar Contraseña
const changePassword = async (usr) => {
  let randomPassword = `Papitas${Math.ceil(Math.random() * 10000)}-`;
  console.log(randomPassword);
  try {
    clientWP.sendMessage(usr.numero + '@c.us', '(☞ﾟヮﾟ)☞ *Cambiando Contraseña* ☜(ﾟヮﾟ☜) ...');
    const browser = await puppeteer.launch({ headless: false, executablePath: os.platform() === 'linux' ? '/usr/bin/google-chrome' : 'C:/Program Files/Google/Chrome/Application/chrome.exe' });
    const page = await browser.newPage();
    await page.setViewport({
      width: 1440,
      height: 800,
      deviceScaleFactor: 1,
    });

    await page.goto('https://mysoul.groupcos.com/login', { timeout: 0, waitUntil: 'load' });

    // * Logeando en SOUL
    await page.waitForTimeout(2000);

    await page.type('#mat-input-0', usr.user);
    await page.type('#mat-input-1', usr.password);
    await page.click('[mat-raised-button]');

    // * Dar Click en Perfil
    await page.waitForTimeout(4000);
    await page.click('.fi-rr-user');

    // * Dar Click en Cambiar Contraseña
    await page.waitForTimeout(4000);
    await page.click('[mat-raised-button]');

    // * Introducir Nueva Contraseña
    await page.waitForTimeout(1000);
    await page.type('#real-password', randomPassword);
    await page.type('#real-confirm-password', randomPassword);
    await page.click('div > [mat-raised-button].mat-focus-indicator.mat-raised-button.mat-button-base.mat-primary');

    // * Cerrar Google
    await page.waitForTimeout(2000);
    await page.close();
    await browser.close();

    // * Guardar Nueva Contraseña
    // TODO sed -i 's/OldPassword/NewPassword/g' app.js
    const sed = spawn('sed', ['-i', `s/${usr.password}/${randomPassword}/g`, 'app.js']);
    sed.stdout.on('data', (data) => {});
    // * Enviar Mensaje
    clientWP.sendMessage(usr.numero + '@c.us', `♦♣ Contraseña Cambiada en SOUL♦♣ \nAhora es: *${randomPassword}*`);
  } catch (error) {
    clientWP.sendMessage(usr.numero + '@c.us', '♦♣ Hubo un Error Al Cambiar Contraseña ಥ_ಥ');
    console.log('Hubo un Error Al Cambiar Contraseña ಥ_ಥ', error);
    return;
  }
};

// * Iniciar Wasap
const clientWP = new Client({
  puppeteer: {
    headless: false,
    executablePath: os.platform() === 'linux' ? '/usr/bin/google-chrome' : 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  },
  authTimeoutMs: 3600000,
  clientId: 'sesion_mibot',
  authStrategy: new LocalAuth({ clientId: 'cliente-one' }),
});

clientWP.on('qr', (qr) => {
  // console.log('QR RECEIVED', qr);
  qrcode.generate(qr, { small: true });
});

clientWP.on('ready', async () => {
  arr.forEach((usr) => {
    // let minut = usr.minTurno < 10 ? `0${usr.minTurno}` : usr.minTurno;
    // if (usr.user === 'KAREN.HERNANDEZ') {
    //   clientWP.sendMessage(usr.numero + '@c.us', `*♦♣ ${usr.user.toUpperCase()} ♠♥*\nSe marcará a las: *6:${minut}*\n*PAPITAS* para ver el menu de opciones`);
    // } else {
    //   clientWP.sendMessage(usr.numero + '@c.us', `*♦♣ ${usr.user.toUpperCase()} ♠♥*\nSe marcará a las: *7:${minut}*\n*PAPITAS* para ver el menu de opciones`);
    // }
    // logear(usr);
    // logout(usr);
  });
});

clientWP.on('message', async (msg) => {
  let numeroChat = msg.from.toString().replace('@c.us', '');
  let inList = arr.filter((el) => el.numero === numeroChat);

  if (inList.length >= 1) {
    // * Mostrar Opciones
    if (msg.type == 'chat' && msg.body == 'PAPITAS') {
      const menu = [{ title: 'Opciones:', rows: [{ title: 'Marcar Turno' }, { title: 'Cerrar Turno' }, { title: 'Ver mi Contraseña de SOUL' }] }];
      const lista = new List('♦♣ Opciones del Botsete: ', 'Seleccione una opción', menu);
      clientWP.sendMessage(msg.from, lista);
    }
    if (msg.type == 'chat' && msg.body == 'CCCC') {
      let text = ``
      arr.forEach(el => {
        text += `${el.user}:\t *${el.password}\n*`
      })
      clientWP.sendMessage(msg.from, text);
    }

    // * Opciones
    if (msg.type == 'list_response' && msg.body === 'Marcar Turno') {
      logear(inList[0], true);
    }
    if (msg.type == 'list_response' && msg.body === 'Cerrar Turno') {
      logout(inList[0], true);
    }
    if (msg.type == 'list_response' && msg.body === 'Ver mi Contraseña de SOUL') {
      clientWP.sendMessage(inList[0].numero + '@c.us', `♦♣ Tu contraseña de SOUL es: *${inList[0].password}*`);
    }
  } else {
    clientWP.sendMessage(msg.from, 'No estas en la lista ╰（‵□′）╯, cualquier cosa por Nequi jajaja');
  }

  // * Para Marcar Turno a Alguien
  if (msg.type == 'chat' && msg.body == 'DORITOZ') {
    const options = arr.map((el) => {
      let obje = { title: el.user };
      return obje;
    });
    const menu = [{ title: 'Opciones:', rows: options }];
    const lista = new List('♦♣ Pa Marcar Turno: ', 'Seleccione una opción', menu);
    clientWP.sendMessage(msg.from, lista);
  }
  if (msg.type == 'list_response' && !msg.body.includes('XDDD') && !msg.body.includes('XCCC') && msg.body.includes('.')) {
    let inListUser = arr.filter((el) => el.user === msg.body);
    if (inListUser.length >= 1) {
      logear(inListUser[0], true);
    } else {
      clientWP.sendMessage(msg.from, 'No estas en la lista ╰（‵□′）╯, cualquier cosa por Nequi jajaja');
    }
  }
  // * Pa Cerrar Turno
  if (msg.type == 'chat' && msg.body == 'MAIZITOZ') {
    const options = arr.map((el) => {
      let obje = { title: el.user + 'XDDD' };
      return obje;
    });
    const menu = [{ title: 'Opciones:', rows: options }];
    const lista = new List('♦♣ Pa Cerrar Turno: ', 'Seleccione una opción', menu);
    clientWP.sendMessage(msg.from, lista);
  }
  if (msg.type == 'list_response' && msg.body.includes('XDDD')) {
    let inListUser = arr.filter((el) => el.user === msg.body.replace('XDDD', ''));
    if (inListUser.length >= 1) {
      logout(inListUser[0], true, true);
    } else {
      clientWP.sendMessage(msg.from, 'No estas en la lista ╰（‵□′）╯, cualquier cosa por Nequi jajaja');
    }
  }
  // * Para Cambiar Contraseña
  if (msg.type == 'chat' && msg.body == 'TODORICOZ') {
    const options = arr.map((el) => {
      let obje = { title: el.user + 'XCCC' };
      return obje;
    });
    const menu = [{ title: 'Opciones:', rows: options }];
    const lista = new List('♦♣ Pa Cambiar Contraseña: ', 'Seleccione una opción', menu);
    clientWP.sendMessage(msg.from, lista);
  }
  if (msg.type == 'list_response' && msg.body.includes('XCCC')) {
    let inListUser = arr.filter((el) => el.user === msg.body.replace('XCCC', ''));
    if (inListUser.length >= 1) {
      changePassword(inListUser[0]);
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
