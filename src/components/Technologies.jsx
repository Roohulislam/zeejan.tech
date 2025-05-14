import { useState, useEffect } from 'react';
import { 
  FaGlobe, FaMobileAlt, FaDatabase, FaPalette, FaRobot,
  FaReact, FaNodeJs, FaWordpress, 
  FaServer, FaAws, 
  FaFigma, FaSketch,
  FaBrain, FaPython,
  FaApple, FaAndroid, FaShopify,
  FaChevronDown, FaChevronUp
} from 'react-icons/fa';
import { FaFlutter } from "react-icons/fa6";
import { 
  SiNextdotjs, SiAngular, SiVuedotjs, SiTypescript, 
  SiHtml5, SiCss3, SiJavascript, SiNestjs, SiPhp, 
  SiLaravel, SiDjango, SiFlask, SiDrupal, SiWebflow,
  SiSwift, SiKotlin, 
  SiKeras
} from "react-icons/si";

const Technologies = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubCategory, setActiveSubCategory] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const categories = [
    { id: 'web', name: 'Web Platform', icon: <FaGlobe className="mr-2" /> },
    { id: 'mobile', name: 'Mobile App', icon: <FaMobileAlt className="mr-2" /> },
    { id: 'database', name: 'Databases', icon: <FaDatabase className="mr-2" /> },
    { id: 'uiux', name: 'UI/UX', icon: <FaPalette className="mr-2" /> },
    { id: 'ai', name: 'AI/ML & GenAI', icon: <FaRobot className="mr-2" /> }
  ];

  const technologies = {
    web: {
      frontend: [
        { name: 'React.js', icon: <FaReact className="text-blue-500" /> },
        { name: 'Next.js', icon: <SiNextdotjs className="text-black" /> },
        { name: 'Angular', icon: <SiAngular className="text-red-500" /> },
        { name: 'Vue.js', icon: <SiVuedotjs className="text-green-500" /> },
        { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
        { name: 'HTML5', icon: <SiHtml5 className="text-orange-500" /> },
        { name: 'CSS3', icon: <SiCss3 className="text-blue-400" /> },
        { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
        { name: 'REST API', icon: <FaServer className="text-purple-500" /> }
      ],
      backend: [
        { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
        { name: 'Python', icon: <FaPython className="text-blue-800" /> },
        { name: 'Nest.js', icon: <SiNestjs className="text-red-600" /> },
        { name: 'PHP', icon: <SiPhp className="text-purple-700" /> },
        { name: 'Laravel', icon: <SiLaravel className="text-red-600" /> },
        { name: 'Django', icon: <SiDjango className="text-green-800" /> },
        { name: 'Flask', icon: <SiFlask className="text-black" /> }
      ],
      cms: [
        { name: 'WordPress', icon: <FaWordpress className="text-blue-700" /> },
        { name: 'Shopify', icon: <FaShopify className="text-green-600" /> },
        { name: 'Drupal', icon: <SiDrupal className="text-blue-600" /> },
        { name: 'Webflow', icon: <SiWebflow className="text-blue-400" /> }
      ]
    },
    mobile: {
      crossPlatform: [
        { name: 'Flutter', icon: <FaFlutter className="text-blue-400" /> },
        { name: 'React Native', icon: <FaReact className="text-blue-500" /> }
      ],
      android: [
        { name: 'Kotlin', icon: <SiKotlin className="text-purple-600" /> },
        { name: 'RxSwift', icon: <SiSwift className="text-orange-500" /> },
        { name: 'Jetpack', icon: <FaAndroid className="text-green-600" /> },
        { name: 'Retrofit', icon: <FaServer className="text-gray-600" /> }
      ],
      ios: [
        { name: 'Swift', icon: <SiSwift className="text-orange-500" /> },
        { name: 'UIKit', icon: <FaApple className="text-gray-700" /> },
        { name: 'Core Data', icon: <FaDatabase className="text-blue-600" /> }
      ]
    },
    database: {
      sql: [
        { name: 'PostgreSQL', icon: <FaDatabase className="text-blue-800" /> },
        { name: 'MySQL', icon: <FaDatabase className="text-orange-500" /> }
      ],
      nosql: [
        { name: 'MongoDB', icon: <FaDatabase className="text-green-500" /> }
      ]
    },
    uiux: {
      design: [
        { name: 'Figma', icon: <FaFigma className="text-purple-500" /> },
        { name: 'Sketch', icon: <FaSketch className="text-orange-400" /> },
        { name: 'Adobe XD', icon: <FaPalette className="text-pink-500" /> }
      ],
      prototyping: [
        { name: 'InVision', icon: <FaPalette className="text-red-400" /> },
        { name: 'Proto.io', icon: <FaPalette className="text-blue-400" /> }
      ]
    },
    ai: {
      frameworks: [
        { name: 'Generative AI', icon: <FaRobot className="text-blue-400" /> },
        { name: 'Keras', icon: <SiKeras className="text-red-500" /> },
        { name: 'LLMs', icon: <FaBrain className="text-purple-600" /> }
      ],
      nlp: [
        { name: 'NLTK', icon: <FaBrain className="text-green-600" /> },
        { name: 'spaCy', icon: <FaBrain className="text-blue-500" /> }
      ]
    }
  };

  if (!isMounted) return <div className="flex items-center justify-center h-screen">Loading...</div>;

  const toggleCategory = (categoryId) => {
    if (activeCategory === categoryId) {
      setActiveCategory(null);
      setActiveSubCategory(null);
    } else {
      setActiveCategory(categoryId);
      const subCats = Object.keys(technologies[categoryId]);
      setActiveSubCategory(subCats[0]);
    }
  };

  return (
    <div className="bg-[#F6F5F5]">
      {/* Centered Heading Section */}
      <div className="text-center py-18 bg-white shadow-sm px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Our Technologies</h2>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
          Explore our portfolio of successful implementations across various technologies
        </p>
      </div>

      {/* Mobile Category Selector */}
      <div className="lg:hidden px-4">
        <div className="space-y-2 pt-6 pb-4">
          {categories.map((category) => (
            <div key={category.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <button
                onClick={() => toggleCategory(category.id)}
                className={`flex items-center justify-between w-full p-4 text-left ${
                  activeCategory === category.id ? 'bg-[#0C359E] text-white' : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center">
                  {category.icon}
                  <span className="ml-2 font-medium">{category.name}</span>
                </div>
                {activeCategory === category.id ? (
                  <FaChevronUp className="text-white" />
                ) : (
                  <FaChevronDown className="text-gray-500" />
                )}
              </button>
              
              {activeCategory === category.id && (
                <div className="bg-[#F6F5F5]">
                  <div className="p-4">
                    <div className="grid grid-cols-2 gap-3">
                      {Object.keys(technologies[category.id]).map((subCat) => (
                        <button
                          key={subCat}
                          onClick={() => setActiveSubCategory(subCat)}
                          className={`p-3 rounded text-sm font-medium ${
                            activeSubCategory === subCat
                              ? 'bg-[#0C359E] text-white'
                              : 'bg-white hover:bg-gray-100'
                          }`}
                        >
                          {subCat}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {/* Technology Cards for Mobile */}
                  {activeSubCategory && (
                    <div className="p-4 pt-0">
                      <h2 className="text-lg font-bold  mb-3 capitalize">
                        {category.name} - {activeSubCategory}
                      </h2>
                      
                      <div className="grid grid-cols-1 gap-3">
                        {technologies[category.id][activeSubCategory]?.map((tech, index) => (
                          <div 
                            key={index} 
                            className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                          >
                            <div className="flex items-center mb-1">
                              <span className="text-xl mr-2">{tech.icon}</span>
                              <h3 className="text-base font-semibold">{tech.name}</h3>
                            </div>
                            <p className="text-xs text-gray-600">
                              {tech.name} is used for {activeSubCategory} development...
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex">
        {/* Sidebar */}
        <div className="w-72 h-150  bg-white shadow-md">
          <nav className="p-2 overflow-y-auto h-full">
            {categories.map((category) => (
              <div key={category.id}>
                <button
                  onClick={() => {
                    const subCats = Object.keys(technologies[category.id]);
                    setActiveCategory(category.id);
                    setActiveSubCategory(subCats[0]);
                  }}
                  className={`flex items-center w-full p-3 rounded-lg mb-1 ${
                    activeCategory === category.id 
                      ? 'bg-[#0C359E] text-white' 
                      : 'hover:bg-gray-100'
                  }`}
                >
                  {category.icon}
                  <span>{category.name}</span>
                </button>
                
                {activeCategory === category.id && (
                  <div className="ml-8 mt-1 space-y-1">
                    {Object.keys(technologies[category.id]).map((subCat) => (
                      <button
                        key={subCat}
                        onClick={() => setActiveSubCategory(subCat)}
                        className={`flex items-center w-full p-2 rounded ${
                          activeSubCategory === subCat 
                            ? 'bg-[#0C359E] text-white' 
                            : 'hover:bg-gray-50'
                        }`}
                      >
                        <span className="capitalize">{subCat}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Technology Cards */}
        <div className="flex-1 p-8 overflow-auto">
          {activeCategory && activeSubCategory && (
            <>
              <h2 className="text-2xl font-bold mb-6 capitalize">
                {categories.find(c => c.id === activeCategory)?.name} - {activeSubCategory}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {technologies[activeCategory]?.[activeSubCategory]?.map((tech, index) => (
                  <div 
                    key={index} 
                    className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                  >
                    <div className="flex items-center mb-3">
                      <span className="text-2xl mr-3">{tech.icon}</span>
                      <h3 className="text-lg font-semibold">{tech.name}</h3>
                    </div>
                    <p className="text-gray-600">
                      {tech.name} is used for {activeSubCategory} development...
                    </p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Technologies;