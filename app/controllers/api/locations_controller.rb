class Api::LocationsController < ApplicationController
  before_action :set_trip
  before_action :set_location, only: [:show, :update, :destroy]

  def index
    render json: @trip.locations
  end

  def show
    render json: @location
  end

  def create
    location = @trip.locations.new(location_params)

    if location.save
      render json: location
    else
      render json: location.errors, status: 422
    end
  end

  def update
    if @location.update(location_params)
      render json: @location
    else
      render json: @location.errors, status: 422
    end
  end

  def destroy
    @location.destroy
  end

  private
    def set_trip
      @trip = Trip.find(params[:trip_id])
    end

    def set_location
      @location = Location.find(params[:id])
    end

    def location_params
      params.require(:location).permit(:name)
    end
end
