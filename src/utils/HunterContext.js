import { useContext, createContext, useState } from "react";

const WeaponContext = createContext();
const WeaponUpdateContext = createContext();
const HeadContext = createContext();
const HeadUpdateContext = createContext();
const ChestContext = createContext();
const ChestUpdateContext = createContext();
const GlovesContext = createContext();
const GlovesUpdateContext = createContext();
const WaistContext = createContext();
const WaistUpdateContext = createContext();
const LegsContext = createContext();
const LegsUpdateContext = createContext();
const CharmContext = createContext();
const CharmUpdateContext = createContext();

export function useWeapon() {
  return useContext(WeaponContext);
}

export function useWeaponUpdate() {
  return useContext(WeaponUpdateContext);
}

export function useHead() {
  return useContext(HeadContext);
}

export function useHeadUpdate() {
  return useContext(HeadUpdateContext);
}

export function useChest() {
  return useContext(ChestContext);
}

export function useChestUpdate() {
  return useContext(ChestUpdateContext);
}

export function useGloves() {
  return useContext(GlovesContext);
}

export function useGlovesUpdate() {
  return useContext(GlovesUpdateContext);
}

export function useWaist() {
  return useContext(WaistContext);
}

export function useWaistUpdate() {
  return useContext(WaistUpdateContext);
}

export function useLegs() {
  return useContext(LegsContext);
}

export function useLegsUpdate() {
  return useContext(LegsUpdateContext);
}

export function useCharm() {
  return useContext(CharmContext);
}

export function useCharmUpdate() {
  return useContext(CharmUpdateContext);
}

export function HunterProvider({ children }) {
  const [weapon, setWeapon] = useState({});
  const [head, setHead] = useState({});
  const [chest, setChest] = useState({});
  const [gloves, setGloves] = useState({});
  const [waist, setWaist] = useState({});
  const [legs, setLegs] = useState({});
  const [charm, setCharm] = useState({});

  const handleSetWeapon = (equip) => {
    let temp = JSON.parse(JSON.stringify(equip));
    setWeapon(temp);
  };

  const handleSetHead = (equip) => {
    let temp = JSON.parse(JSON.stringify(equip));
    setHead(temp);
  };

  const handleSetChest = (equip) => {
    let temp = JSON.parse(JSON.stringify(equip));
    setChest(temp);
  };

  const handleSetGloves = (equip) => {
    let temp = JSON.parse(JSON.stringify(equip));
    setGloves(temp);
  };

  const handleSetWaist = (equip) => {
    let temp = JSON.parse(JSON.stringify(equip));
    setWaist(temp);
  };

  const handleSetLegs = (equip) => {
    let temp = JSON.parse(JSON.stringify(equip));
    setLegs(temp);
  };

  const handleSetCharm = (equip) => {
    let temp = JSON.parse(JSON.stringify(equip));
    setCharm(temp);
  };

  return (
    <WeaponContext.Provider value={weapon}>
      <WeaponUpdateContext.Provider value={handleSetWeapon}>
        <HeadContext.Provider value={head}>
          <HeadUpdateContext.Provider value={handleSetHead}>
            <ChestContext.Provider value={chest}>
              <ChestUpdateContext.Provider value={handleSetChest}>
                <GlovesContext.Provider value={gloves}>
                  <GlovesUpdateContext.Provider value={handleSetGloves}>
                    <WaistContext.Provider value={waist}>
                      <WaistUpdateContext.Provider value={handleSetWaist}>
                        <LegsContext.Provider value={legs}>
                          <LegsUpdateContext.Provider value={handleSetLegs}>
                            <CharmContext.Provider value={charm}>
                              <CharmUpdateContext.Provider
                                value={handleSetCharm}
                              >
                                {children}
                              </CharmUpdateContext.Provider>
                            </CharmContext.Provider>
                          </LegsUpdateContext.Provider>
                        </LegsContext.Provider>
                      </WaistUpdateContext.Provider>
                    </WaistContext.Provider>
                  </GlovesUpdateContext.Provider>
                </GlovesContext.Provider>
              </ChestUpdateContext.Provider>
            </ChestContext.Provider>
          </HeadUpdateContext.Provider>
        </HeadContext.Provider>
      </WeaponUpdateContext.Provider>
    </WeaponContext.Provider>
  );
}
