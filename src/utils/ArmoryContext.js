import { useContext, createContext, useState, useEffect } from "react";

const WeaponListContext = createContext();
const LowArmorContext = createContext();
const HighArmorContext = createContext();
const MasterArmorContext = createContext();
const CharmsContext = createContext();
const DecorationsContext = createContext();
const SkillsContext = createContext();
const DoneLoadingContext = createContext();

export function useWeaponList() {
  return useContext(WeaponListContext);
}

export function useLowArmor() {
  return useContext(LowArmorContext);
}

export function useHighArmor() {
  return useContext(HighArmorContext);
}

export function useMasterArmor() {
  return useContext(MasterArmorContext);
}

export function useCharms() {
  return useContext(CharmsContext);
}

export function useDecorations() {
  return useContext(DecorationsContext);
}

export function useSkills() {
  return useContext(SkillsContext);
}

export function useDoneLoading() {
  return useContext(DoneLoadingContext);
}

export function ArmoryProvider({ children }) {
  const [weaponList, setWeaponList] = useState([]);
  const [lowArmor, setLowArmor] = useState([]);
  const [highArmor, setHighArmor] = useState([]);
  const [masterArmor, setMasterArmor] = useState([]);
  const [charms, setCharms] = useState([]);
  const [decorations, setDecorations] = useState([]);
  const [skills, setSkills] = useState([]);

  const [doneLoading, setDoneLoading] = useState(false);

  useEffect(() => {
    setDoneLoading(
      weaponList.length &&
        lowArmor.length &&
        highArmor.length &&
        masterArmor.length &&
        charms.length &&
        decorations.length &&
        skills.length
    );
  }, [
    weaponList,
    lowArmor,
    highArmor,
    masterArmor,
    charms,
    decorations,
    skills,
  ]);

  useEffect(() => {
    // Get all weapons
    fetch(`https://mhw-db.com/weapons`).then((res) => {
      res.json().then((resJSON) => {
        setWeaponList(resJSON);
      });
    });

    // Get all armor sets
    fetch(`https://mhw-db.com/armor/sets/`).then((res) => {
      res.json().then((resJSON) => {
        const low = [];
        const high = [];
        const master = [];
        resJSON.forEach((equip) => {
          switch (equip.rank) {
            case "low":
              low.push(equip);
              break;
            case "high":
              high.push(equip);
              break;
            case "master":
              master.push(equip);
              break;
            default:
              break;
          }
        });
        setLowArmor(low);
        setHighArmor(high);
        setMasterArmor(master);
      });
    });

    // Get all charms
    fetch(`https://mhw-db.com/charms`).then((res) => {
      res.json().then((resJSON) => {
        setCharms(resJSON);
      });
    });

    // Get all decorations
    fetch(`https://mhw-db.com/decorations`).then((res) => {
      res.json().then((resJSON) => {
        setDecorations(resJSON);
      });
    });

    // Get all skills
    fetch(`https://mhw-db.com/skills`).then((res) => {
      res.json().then((resJSON) => {
        setSkills(resJSON);
      });
    });
  }, []);

  return (
    <WeaponListContext.Provider value={weaponList}>
      <LowArmorContext.Provider value={lowArmor}>
        <HighArmorContext.Provider value={highArmor}>
          <MasterArmorContext.Provider value={masterArmor}>
            <CharmsContext.Provider value={charms}>
              <DecorationsContext.Provider value={decorations}>
                <SkillsContext.Provider value={skills}>
                  <DoneLoadingContext.Provider value={doneLoading}>
                    {children}
                  </DoneLoadingContext.Provider>
                </SkillsContext.Provider>
              </DecorationsContext.Provider>
            </CharmsContext.Provider>
          </MasterArmorContext.Provider>
        </HighArmorContext.Provider>
      </LowArmorContext.Provider>
    </WeaponListContext.Provider>
  );
}
