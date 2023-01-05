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

export function HunterProvider({ children }) {
  const [weapon, setWeapon] = useState();
  const [head, setHead] = useState();
  const [chest, setChest] = useState();
  const [gloves, setGloves] = useState();
  const [waist, setWaist] = useState();
  const [legs, setLegs] = useState();

  return (
    <WeaponContext.Provider value={weapon}>
      <WeaponUpdateContext.Provider value={setWeapon}>
        <HeadContext.Provider value={head}>
          <HeadUpdateContext.Provider value={setHead}>
            <ChestContext.Provider value={chest}>
              <ChestUpdateContext.Provider value={setChest}>
                <GlovesContext.Provider value={gloves}>
                  <GlovesUpdateContext.Provider value={setGloves}>
                    <WaistContext.Provider value={waist}>
                      <WaistUpdateContext.Provider value={setWaist}>
                        <LegsContext.Provider value={legs}>
                          <LegsUpdateContext.Provider value={setLegs}>
                            {children}
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
