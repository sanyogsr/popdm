export default function Canvas() {
    return (
      <div className="flex-grow bg-accent relative">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#ccc_1px,transparent_1px),linear-gradient(180deg,#ccc_1px,transparent_1px)] bg-[length:20px_20px] z-0" />
  
        {/* Automation Nodes */}
        <div className="relative z-10">
          <div className="p-5 m-4 bg-white border-2 border-black shadow-brutal cursor-pointer">
            Start Node
          </div>
        </div>
      </div>
    );
  }
  