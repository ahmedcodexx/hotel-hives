
const Stat = ({title, icon, value}) => {
  return (
    <div className="flex-center gap-10 rounded-md p-3 bg-[var(--color-primary)]">
        <span className={`text-white bg-main/80 p-5 rounded-full`}>
            {icon}
        </span>
        <div className="text-start">
            <p className="uppercase text-xs mb-2 opacity-70">{title}</p>
            <span className="font-semibold text-2xl">{value}</span>
        </div>
    </div>
  )
}

export default Stat