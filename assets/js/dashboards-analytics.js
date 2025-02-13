/**
 * Dashboard Analytics
 */

'use strict';

(function () {
  let cardColor, headingColor, axisColor, shadeColor, borderColor;

  cardColor = config.colors.white;
  headingColor = config.colors.headingColor;
  axisColor = config.colors.axisColor;
  borderColor = config.colors.borderColor;

  // Total Revenue Report Chart - Bar Chart
  // --------------------------------------------------------------------
  const totalRevenueChartEl = document.querySelector('#totalRevenueChart'),
    totalRevenueChartOptions = {
      chart: {
        height: 300,
        type: 'area',
        foreColor: "#777",
        /* toolbar: {
          show: false
        } */
      },
      series: [
        {
          name: '2024',
          data: [25, 32, 22, 17, 28, 35, 15]
        },
        {
          name: '2023',
          data: [10, 7, 15, 12, 18, 12, 9]
        },
        {
          name: '2022',
          data: [3, -8, -2, -5, 8, 2, -15]
        }
      ],
      colors: ['#0082FD', config.colors.success, '#E33'],
      xaxis: {
        categories: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: true
        },
        labels: {
          style: {
            fontSize: '14px',
          }
        }
      },
      yaxis: {
        labels: {
          offsetX: -5,
          offsetY: 0
        },
        tooltip: {
          enabled: true
        },
        labels: {
          style: {
            fontSize: '12px'
          }
        }
      },
      stroke: {
        curve: 'smooth', /* alt-amount: "straight: */
        width: 1,
        colors: [cardColor]
      },
      dataLabels: {
        enabled: true
      },
      grid: {
        padding: {
          /* right:  ,
             left: , */
        }, /* it set on 10 by default( for right & left ) */
        borderColor: '#EEF'
      },
      legend: {
        position: 'top',
        horizontalAlign: 'center'
      },
      fill: {
        type: 'gradient' /* it could be solid */
      },
      responsive: [
        {
          breakpoint: 1400,
          options: {
            legend: {
              horizontalAlign: 'left'
            }
          }
        },
        {
          breakpoint: 400,
          options: {
            legend: {
              position: 'bottom'
            },
            dataLabels: {
              enabled: false
            }
          }
        }
      ]
    }
  if (typeof totalRevenueChartEl !== undefined && totalRevenueChartEl !== null) {
    const totalRevenueChart = new ApexCharts(totalRevenueChartEl, totalRevenueChartOptions);
    totalRevenueChart.render();
  }

  // Growth Chart - Radial Bar Chart
  // --------------------------------------------------------------------
  const growthChartEl = document.querySelector('#growthChart'),
    growthChartOptions = {
      series: [210],
      labels: ['رشد سالانه'],
      chart: {
        height: 240,
        type: 'radialBar'
      },
      plotOptions: {
        radialBar: {
          size: 150,
          offsetY: 10,
          startAngle: 0,
          endAngle: 203,
          hollow: {
            size: '50%',
          },
          track: {
            background: 'transparent',
            strokeWidth: '100%'
          },
          dataLabels: {
            name: {
              offsetY: 15,
              color: 'var(--tx-menu-theme)',
              fontSize: '14px',
              fontWeight: '600',
              fontFamily: 'DanaRegular'
            },
            value: {
              offsetY: -25,
              color: 'var(--tx-menu-theme)',
              fontSize: '22px',
              fontWeight: '500',
              fontFamily: 'HorizonRoundedBold'
            }
          }
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          shadeIntensity: 1,
          gradientToColors: [config.colors.info, config.colors.success],
          inverseColors: true,
          stops: [30, 70, 100]
        }
      },
      stroke: {
        dashArray: 2
      },
      grid: {
        padding: {
          top: -35,
          bottom: -10
        }
      },
      states: {
        hover: {
          filter: {
            type: 'none'
          }
        },
        active: {
          filter: {
            type: 'none'
          }
        }
      }
    };
  if (typeof growthChartEl !== undefined && growthChartEl !== null) {
    const growthChart = new ApexCharts(growthChartEl, growthChartOptions);
    growthChart.render();
  }

  // Profit Report Line Chart
  // --------------------------------------------------------------------
  const profileReportChartEl = document.querySelector('#profileReportChart'),
    profileReportChartConfig = {
      series: [{
        name: "Desktops",
        data: [8, 17, 25, 14, 22, 32, 23, 15, 26, 15, 26, 30, 14]
      }],
      chart: {
        height: 350,
        type: 'line',
        foreColor: '#777',
        zoom: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: true
      },
      stroke: {
        curve: 'smooth'
      },
      colors: ['#00BE00'],
      grid: {
        row: {
          colors: ['#EEE', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
        axisBorder: {
          show: false
        },
        labels: {
          style: {
            fontFamily: 'HorizonRoundedBold',
            colors: '#999'
          }
        }
      },
      responsive: [
        {
          breakpoint: 400,
          options: {
            xaxis: {
              labels: {
                style: {
                  fontSize: '12px'
                }
              }
            }
          }
        }
      ]
    };
  if (typeof profileReportChartEl !== undefined && profileReportChartEl !== null) {
    const profileReportChart = new ApexCharts(profileReportChartEl, profileReportChartConfig);
    profileReportChart.render();
  }

  // Order Statistics Chart
  // --------------------------------------------------------------------
  const chartOrderStatistics = document.querySelector('#orderStatisticsChart'),
    orderChartConfig = {
      chart: {
        height: 165,
        width: 130,
        type: 'donut'
      },
      labels: ['الکترونیک', 'دیزاین داخلی', 'مد و لباس', 'ورزشی'],
      series: [73, 7, 10, 10],
      colors: ['#FC0', config.colors.secondary, config.colors.info, config.colors.success],
      stroke: {
        width: 5,
        colors: 'transparent'
      },
      dataLabels: {
        enabled: false,
        formatter: function (val, opt) {
          return parseInt(val) + '%';
        }
      },
      legend: {
        show: false
      },
      grid: {
        padding: {
          top: 0,
          bottom: 0,
          right: 15
        }
      },
      plotOptions: {
        pie: {
          donut: {
            size: '70%',
            labels: {
              show: true,
              value: {
                fontSize: '1.5rem',
                fontFamily: 'Public Sans',
                color: 'var(--tx-menu-theme)',
                offsetY: -15,
                formatter: function (val) {
                  return parseInt(val) + '%';
                }
              },
              name: {
                offsetY: 20,
                fontFamily: 'Public Sans'
              },
              total: {
                show: true,
                fontSize: '0.8125rem',
                fontFamily: 'DanaBold',
                color: 'var(--tx-menu-theme)',
                label: 'دسته بندی'
              }
            }
          }
        }
      }
    };
  if (typeof chartOrderStatistics !== undefined && chartOrderStatistics !== null) {
    const statisticsChart = new ApexCharts(chartOrderStatistics, orderChartConfig);
    statisticsChart.render();
  }

  // Income Chart - Area chart
  // --------------------------------------------------------------------
  const incomeChartEl = document.querySelector('#incomeChart'),
    incomeChartConfig = {
      chart: {
        height: 300,
        type: 'area',
        foreColor: "#777",
        /* toolbar: {
          show: false
        } */
      },
      series: [
        {
          name: '2024 income',
          data: [11, 22, 33, 18, 25, 44, 25, 32, 22, 17, 28, 35, 15]
        },
      ],
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: true
        },
        labels: {
          style: {
            fontSize: '12px',
            fontFamily: 'HorizonRoundedBold'
          }
        }
      },
      yaxis: {
        labels: {
          offsetX: -5,
          offsetY: 0
        },
        tooltip: {
          enabled: true
        },
        labels: {
          style: {
            fontSize: '12px'
          }
        }
      },
      stroke: {
        curve: 'smooth', /* alt-amount: "straight: */
        width: 1,
        colors: [cardColor]
      },
      dataLabels: {
        enabled: true
      },
      grid: {
        padding: {
          /* right:  ,
             left: , */
        }, /* it set on 10 by default( for right & left ) */
        borderColor: '#EEF'
      },
      legend: {
        position: 'top',
        horizontalAlign: 'center'
      },
      colors: ['#0082FD'],
      fill: {
        type: 'gradient',
        gradient: {
          shade: shadeColor,
          shadeIntensity: 0.7,
          opacityFrom: 0.8,
          opacityTo: 0.3,
          stops: [20, 100, 30]
        }
      },
      responsive: [
        {
          breakpoint: 1400,
          options: {
            legend: {
              horizontalAlign: 'left'
            }
          }
        },
        {
          breakpoint: 400,
          options: {
            legend: {
              position: 'bottom'
            },
            dataLabels: {
              enabled: false
            },
            xaxis: {
              labels: {
                style: {
                  fontSize: '10px'
                }
              }
            }
          }
        }
      ]
    };
  if (typeof incomeChartEl !== undefined && incomeChartEl !== null) {
    const incomeChart = new ApexCharts(incomeChartEl, incomeChartConfig);
    incomeChart.render();
  }


  // Expenses Full Chart
  const ExpensesChartEl = document.querySelector('#Expenses-Chart'),
    ExpensesChartConfig = {
      chart: {
        height: 300,
        type: 'area',
        foreColor: "#777",
        /* toolbar: {
          show: false
        } */
      },
      series: [
        {
          name: '2024 income',
          data: [3, 5, 8, 4, 3, 12, 2, 9, 11, 7, 2, 5, 1]
        },
      ],
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: true
        },
        labels: {
          style: {
            fontSize: '12px',
            fontFamily: 'HorizonRoundedBold'
          }
        }
      },
      yaxis: {
        labels: {
          offsetX: -5,
          offsetY: 0
        },
        tooltip: {
          enabled: true
        },
        labels: {
          style: {
            fontSize: '12px'
          }
        }
      },
      stroke: {
        curve: 'smooth', /* alt-amount: "straight: */
        width: 1,
        colors: [cardColor]
      },
      dataLabels: {
        enabled: true
      },
      grid: {
        padding: {
          /* right:  ,
             left: , */
        }, /* it set on 10 by default( for right & left ) */
        borderColor: '#EEF'
      },
      legend: {
        position: 'top',
        horizontalAlign: 'center'
      },
      colors: ['#FF3E1D'],
      fill: {
        type: 'gradient',
        gradient: {
          shade: shadeColor,
          shadeIntensity: 0.7,
          opacityFrom: 0.8,
          opacityTo: 0.3,
          stops: [20, 100, 30]
        }
      },
      responsive: [
        {
          breakpoint: 1400,
          options: {
            legend: {
              horizontalAlign: 'left'
            }
          }
        },
        {
          breakpoint: 400,
          options: {
            legend: {
              position: 'bottom'
            },
            dataLabels: {
              enabled: false
            },
            xaxis: {
              labels: {
                style: {
                  fontSize: '10px',
                  fontFamily: 'HorizonRoundedBold'
                }
              }
            }
          }
        }
      ]
    };
  if (typeof ExpensesChartEl !== undefined && ExpensesChartEl !== null) {
    const ExpensesChart = new ApexCharts(ExpensesChartEl, ExpensesChartConfig);
    ExpensesChart.render();
  }

  // Expenses Mini Chart - Radial Chart
  // --------------------------------------------------------------------
  const weeklyExpensesEl = document.querySelector('#expensesOfWeek'),
    weeklyExpensesConfig = {
      series: [65],
      chart: {
        width: 60,
        height: 60,
        type: 'radialBar'
      },
      plotOptions: {
        radialBar: {
          startAngle: 0,
          endAngle: 360,
          strokeWidth: '8',
          hollow: {
            margin: 2,
            size: '45%'
          },
          track: {
            strokeWidth: '50%',
            background: borderColor
          },
          dataLabels: {
            show: true,
            name: {
              show: false
            },
            value: {
              formatter: function (val) {
                return '$' + parseInt(val);
              },
              offsetY: 5,
              color: '#697a8d',
              fontSize: '13px',
              show: true
            }
          }
        }
      },
      fill: {
        type: 'solid',
        colors: config.colors.primary
      },
      stroke: {
        lineCap: 'round'
      },
      grid: {
        padding: {
          top: -10,
          bottom: -15,
          left: -10,
          right: -10
        }
      },
      states: {
        hover: {
          filter: {
            type: 'none'
          }
        },
        active: {
          filter: {
            type: 'none'
          }
        }
      }
    };
  if (typeof weeklyExpensesEl !== undefined && weeklyExpensesEl !== null) {
    const weeklyExpenses = new ApexCharts(weeklyExpensesEl, weeklyExpensesConfig);
    weeklyExpenses.render();
  }
})();
