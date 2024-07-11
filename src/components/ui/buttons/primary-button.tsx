import IconComponent from "../icons/icons.tsx";

interface Props {
    title?: string;
    url?: string;
    noArrow?: boolean;
  }
const PrimaryBtnReact = (props: Props) => {
    const { title, url, noArrow } = props
    const baseClasses =
  "group inline-flex items-center justify-center gap-x-2 rounded-lg px-4 py-3 text-sm font-bold text-neutral-50 ring-zinc-500 transition duration-300 focus-visible:ring outline-none";
const borderClasses = "border border-transparent";
const bgColorClasses =
  "bg-green hover:bg-green active:bg-orange-500 dark:focus:outline-none";
const disableClasses = "disabled:pointer-events-none disabled:opacity-50";
const fontSizeClasses = "2xl:text-base";
const ringClasses = "dark:ring-zinc-200";
    return (<a
        className={`${baseClasses} ${borderClasses} ${bgColorClasses} ${disableClasses} ${fontSizeClasses} ${ringClasses}`}
        href={url}
      >
        {title}
      
        <IconComponent name="arrowRight"/>
      </a>)
}


export default PrimaryBtnReact