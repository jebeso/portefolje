import { useTheme } from "next-themes";
import Switch from "react-switch";
import { useState, useEffect } from "react";
import { SunIcon, MoonIcon, SparklesIcon } from "@heroicons/react/solid";

const ThemeChanger = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;
    const checked = currentTheme === "dark";

    return (
      <Switch
        checked={checked}
        onChange={handleChange}
        onColor="#4c1d95"
        offColor="#a78bfa"
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 1px 5px rgba(0, 0, 0, 0.2)"
        handleDiameter={24}
        uncheckedIcon={false}
        checkedIcon={false}
        uncheckedHandleIcon={<SunIcon className="text-yellow-500" />}
        checkedHandleIcon={<MoonIcon className="text-blue-700" />}
        height={22}
        width={50}
        className="react-switch"
      />
    );
  };

  return (
    <div className="container pt-0.5 flex justify-between items-center">
      {renderThemeChanger()}
    </div>
  );
};

export default ThemeChanger;
