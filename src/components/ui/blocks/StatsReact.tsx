import { AnimatedCounter } from "@/components/animated-counter";
interface GridProps {
  description: string;
  index: number;
  count: number
}
const StatsReact = (props: GridProps) => {
  return (
    <li className="-m-0.5 flex flex-col p-4 sm:p-8">
      <div className="mb-2 flex items-end gap-x-2 text-3xl font-bold text-neutral-800 dark:text-neutral-200 sm:text-5xl">        
        <AnimatedCounter from={0} to={props.count}/>
        +
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-400 sm:text-base">
        {props.description}
      </p>
    </li>
  );
};

export default StatsReact;
