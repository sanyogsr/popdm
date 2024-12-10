export default function HandAndArrow() {
    return (
      <div className="relative flex flex-col items-center gap-16 bg-[#f2f2f2] p-10">
        {/* Realistic Hand */}
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 300 300"
            className="w-48 h-48"
          >
            {/* Hand Path */}
            <path
              d="M150 280 
              Q120 230 100 200 
              Q90 190 80 180 
              Q70 160 80 140 
              Q90 120 110 125 
              Q125 130 125 110 
              Q120 80 110 50 
              Q100 20 130 20 
              Q160 20 170 50 
              Q180 80 180 110 
              Q190 125 210 130 
              Q230 135 240 150 
              Q250 170 230 200 
              Q210 230 190 280 Z"
              fill="#FFFFFF" /* White Fill */
              stroke="#000000" /* Black Border */
              strokeWidth="8"
            />
          </svg>
          {/* Brutalist Shadow */}
          <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-black opacity-30 rounded-lg"></div>
        </div>
  
        {/* Curved Arrow */}
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400 200"
            className="w-64 h-64"
          >
            {/* Curved Arrow Line */}
            <path
              d="M20 180 C100 -50 300 250 380 100"
              fill="none"
              stroke="#000000" /* Black Line */
              strokeWidth="10"
            />
            {/* Arrowhead */}
            <polygon
              points="370,90 400,100 370,110"
              fill="#FFFFFF" /* White Fill */
              stroke="#000000" /* Black Border */
              strokeWidth="6"
            />
          </svg>
          {/* Brutalist Shadow */}
          <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-black opacity-30 rounded-xl"></div>
        </div>
      </div>
    );
  }
  