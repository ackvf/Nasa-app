import React, { Component } from 'react'
import PropTypes from 'prop-types'
import WeatherMars from '../../Components/Mars'
import { MarsWeatherData } from '../../API/MarsWeatherData'
import MarsLoader from '../../Components/MarsLoader'
import NotifyError from '../../Util/Error'

export default class WeatherMarsIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      wMarsData: [],
      selectedSol: '',
      setSelectedSol: '',
      isMetric: true,
      isPrevious: false,
      isFetching: false,
      isLoading: true,
      error: false,
    }

    this.handleIsPrevious = this.handleIsPrevious.bind(this)
    this.handleIsMetric = this.handleIsMetric.bind(this)
    this.handleSelectedSol = this.handleSelectedSol.bind(this)
  }

  handleIsPrevious(bool) {
    this.setState({ isPrevious: bool })
  }

  handleIsMetric(bool) {
    this.setState({ isMetric: bool })
  }

  handleSelectedSol(selectedSol) {
    this.setState({ setSelectedSol: selectedSol })
  }

  componentDidMount = async () => {
    const data = await MarsWeatherData()

    if (!data)
      this.setState({
        error: true,
      })

    setTimeout(() => {
      this.setState({ isLoading: false })
    }, 10500)

    this.setState({
      wMarsData: data,
      selectedSol: data.length - 1,
      isFetching: true,
    })
  }

  render() {
    const {
      wMarsData,
      isLoading,
      selectedSol,
      setSelectedSol,
      isMetric,
      isPrevious,
      error,
    } = this.state
    return (
      <>
        {isLoading ? (
          <MarsLoader />
        ) : (
          <>
            {error ? (
              <NotifyError />
            ) : (
              <WeatherMars
                sol={wMarsData[selectedSol]}
                setSelectedSol={setSelectedSol}
                weather={wMarsData}
                metric={isMetric}
                prev={isPrevious}
                handleIsPrevious={this.handleIsPrevious}
                handleIsMetric={this.handleIsMetric}
                handleSelectedSol={this.handleSelectedSol}
              />
            )}
          </>
        )}
      </>
    )
  }
}

WeatherMarsIndex.defaultProps = {
  wMarsData: [],
  isMetric: true,
  isPrevious: false,
  isFetching: false,
  isLoading: true,
  error: false,
  selectedSol: '',
  setSelectedSol: PropTypes.shape({
    sol: '',
    maxTemp: 0,
    minTemp: 0,
    date: '',
    windDirectionDegrees: 0,
    windSpeed: 0,
  }),
}

WeatherMarsIndex.propTypes = {
  wMarsData: PropTypes.array.isRequired,
  isMetric: PropTypes.bool.isRequired,
  isPrevious: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  setSelectedSol: PropTypes.shape({
    sol: PropTypes.string,
    maxTemp: PropTypes.number,
    minTemp: PropTypes.number,
    date: PropTypes.string,
    windDirectionDegrees: PropTypes.number,
    windSpeed: PropTypes.number,
  }),
}
