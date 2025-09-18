import './App.css'
import { useState } from 'react'
import { Line,Bar,Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
ChartJS.register(ArcElement,CategoryScale, LinearScale, PointElement, LineElement,BarElement, Title, Tooltip, Legend);

function Analysisai() {

    const [data, setData] = useState({
        avgWaitTime: 32, // seconds
        throughput: 1200, // vehicles/hour
        energySavings: 18.5, // percentage
        systemUptime: 99.9 // percentage
    },{

    });

   

    // dataset for traffic flow throughout the day
    const [chartData_tf, setChartData_tf] = useState({
    labels: [
      '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00',
    ],
    datasets: [
      {
        label: 'Avg Speed (mph)',
        data: [50, 60, 55, 45, 50, 40, 35, 50],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        tension: 0.4,
        fill: false,
      },
      {
        label: 'Vehicle Count',
        data: [150, 450, 200, 320, 300, 500, 600, 280],
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        tension: 0.4,
        fill: true,
      },
    ],
  });

  // dataset for performance comparison chart

  const [chartData_pcc, setChartData_pcc] = useState({
    labels: ['Baseline', 'With AI'],
    datasets: [
      {
        label: 'Avg Wait Time (s)',
        data: [50, 30],
        backgroundColor: 'rgba(255, 99, 132, 0.8)',
      },
      {
        label: 'Throughput',
        data: [850, 1000],
        backgroundColor: 'rgba(54, 162, 235, 0.8)',
      },
    ],
  });

  // data set for Vehicle Type Distribution

  const [chartData_vcd, setChartData_vcd] = useState({
    labels: ['Cars', 'Trucks', 'Buses', 'Motorcycles', 'Bicycles'],
    datasets: [
      {
        label: 'Vehicle Type Distribution',
        data: [65, 15, 8, 7, 5],
        backgroundColor: [
          'rgba(54, 162, 235, 0.8)',  // Cars
          'rgba(255, 99, 132, 0.8)',  // Trucks
          'rgba(75, 192, 192, 0.8)',  // Buses
          'rgba(255, 206, 86, 0.8)',  // Motorcycles
          'rgba(153, 102, 255, 0.8)', // Bicycles
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  });

  // dataset for commute time comparison

  const [chartData_ctc, setChartData_ctc] = useState({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'AI Optimized',
        data: [90, 88, 85, 80, 77, 73],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.3,
      },
      {
        label: 'Normal',
        data: [100, 100, 100, 100, 100, 100],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        tension: 0.3,
      },
    ],
  });

  // dataset for ai recommendations

  const [recommendations, setRecommendations] = useState([
    {
      id: 'REC-001',
      priority: 'HIGH',
      location: 'Main St & 5th Ave',
      current: '45s Green, 5s Yellow, 30s Red',
      suggested: '52s Green, 4s Yellow, 24s Red',
      benefit: '+12% throughput',
      confidence: '94% confidence',
    },
    {
      id: 'REC-002',
      priority: 'MEDIUM',
      location: 'Broadway & 42nd St',
      current: '60s Green, 5s Yellow, 35s Red',
      suggested: '55s Green, 5s Yellow, 30s Red',
      benefit: '+8% efficiency',
      confidence: '87% confidence',
    },
    {
      id: 'REC-003',
      priority: 'HIGH',
      location: 'Park Ave & 23rd St',
      current: '40s Green, 4s Yellow, 26s Red',
      suggested: '48s Green, 4s Yellow, 28s Red',
      benefit: '+15% flow rate',
      confidence: '91% confidence',
    },
    {
        id: 'REC-004',
        priority: 'LOW',
        location: '7th Ave & 14th St',
        current: '50s Green, 5s Yellow, 30s Red',
        suggested: '50s Green, 5s Yellow, 30s Red',
        benefit: '+2% flow rate',
        confidence: '76% confidence',
    }
  ]);

  const applyRecommendation = (id) => {
    alert(`Applied recommendation: ${id}`);
  };

  const applyAllRecommendations = () => {
    alert('Applied all recommendations!');
  };


    return (
        <>
            <div className=" mx-auto p-6 bg-white rounded-4xl shadow-md m-5 ">
                <h1 className = "text-2xl font-bold mb-6 text-left">Performance Analytics</h1>
                <p className= "text-gray-600 mb-8 text-left">Comprehensive analysis of traffic flow optimization and system performance</p>

            {/* Cards*/}   
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Avg Wait Time */}
        <div className="border-2 border-gray-200 gray-100 rounded-lg p-4 ">
          <div className="text-sm text-black-500 text-left">Avg Wait Time</div>
          <div className="text-3xl font-semibold text-left">{data.avgWaitTime}s</div>
          <div className="text-green-500 text-sm text-left m-3 ml-0">-15.3% vs baseline</div>
        </div>

        {/* Throughput */}
        <div className="border-2 border-gray-200 gray-100 rounded-lg p-4 ">
          <div className="text-sm text-black-500 text-left">Throughput</div>
          <div className="text-3xl font-semibold text-left">{data.throughput}s</div>
          <div className="text-green-500 text-sm text-left m-3 ml-0">+12.8% vehicles/hour</div>
        </div>

        {/* Energy Savings */}
        <div className="border-2 border-gray-200 gray-100 rounded-lg p-4 ">
          <div className="text-sm text-black-500 text-left">Energy Savings</div>
          <div className="text-3xl font-semibold text-left">{data.energySavings}%</div>
          <div className="text-green-500 text-sm text-left m-3 ml-0">~2.1 tons CO₂/day</div>
        </div>

        {/* System Uptime */}
        <div className="border-2 border-gray-200 gray-100 rounded-lg p-4 ">
          <div className="text-sm text-black-500 text-left">System Uptime</div>
          <div className="text-3xl font-semibold text-left">{data.systemUptime}%</div>
          <div className="text-green-500 text-sm text-left m-3 ml-0">Last 30 days</div>
        </div>
      
      </div>






      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Traffic Flow Throughout the day */}
        {/* Install this dependency - npm install chart.js react-chartjs-2 */}

        <div className="p-6 bg-white rounded-2xl shadow-md m-6 ml-0 mr-0">
      <h2 className="text-left font-bold mb-6">Traffic Flow Throughout the Day</h2>
      <Line
        data={chartData_tf}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: false,
            },
          },
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        }}
      />
    </div>






        {/* Performance Comparison Chart */}

         <div className="p-6 bg-white rounded-2xl shadow-md m-6 ml-0 mr-0">
      <h2 className="text-left font-bold mb-6 ">Performance Comparison</h2>
      <Bar
        data={chartData_pcc}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: false,
            },
          },
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        }}
      />
    </div>


    {/* Vehicle Type Distribution */}

    <div className="max-h-100 max-w-150 p-6 bg-white rounded-2xl shadow-md m-6 ml-0 mr-0">
      <h2 className="text-left font-bold">Vehicle Type Distribution</h2>
      <div className='justify-items-center max-h-90 max-w-150 mt-0'>
      <Pie
        data={chartData_vcd}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: 'right',
            },
          },
        }}
      />
      </div>
    </div>

    {/* Commute Time Comparison */}

     <div className="max-h-100 p-6 bg-white rounded-2xl shadow-md m-6 ml-0 mr-0">
      <h2 className="text-left font-bold mb-6 ">Commute Time Comparison</h2>
      <Line
        data={chartData_ctc}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: 'bottom',
            },
          },
          scales: {
            y: {
              beginAtZero: false,
              max: 110,
            },
          },
        }}
      />
    </div>
        
        </div>

    {/* AI Recommendations Table */}

    <div className="p-6 bg-white-900 text-black rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-6">AI Optimization Recommendations</h1>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded mb-6"
        onClick={applyAllRecommendations}
      >
        Apply All Recommendations
      </button>

      <div className="space-y-6">
        {recommendations.map((rec) => (
          <div key={rec.id} className=" border-2 border-gray-200 bg-white-800 p-4 rounded-lg shadow">
            <div className="flex justify-between items-center">
              <div>
                <span className={`font-bold ${rec.priority === 'HIGH' ? 'text-red-500' : 'text-yellow-300'}`}>
                  {rec.id} {rec.priority}
                </span>
                <span className="ml-2 text-black-400">{rec.location}</span>
              </div>
              <div className="text-green-400 font-semibold">{rec.benefit}</div>
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-black-400">CURRENT</h4>
                <div className="bg-white-700 text-black p-2 rounded mt-1 border-2 border-red-400">{rec.current}</div>
              </div>

              <div>
                <h4 className="text-black-400">AI SUGGESTED</h4>
                <div className="bg-white-700 text-black p-2 rounded mt-1 border-2 border-green-400">{rec.suggested}</div>
              </div>
            </div>

            <div className="flex justify-between items-center mt-4">
              <div className="text-black-400">{rec.confidence}</div>
              <button
                className="bg-black-700 hover:bg-gray-600 text-white px-4 py-1 rounded"
                onClick={() => applyRecommendation(rec.id)}
              >
                Apply Recommendation
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
      </div>
        </>
    );
}
export default Analysisai;