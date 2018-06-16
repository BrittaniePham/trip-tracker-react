class Api::AddressesController < ApplicationController
  before_action :set_location
  before_action :set_address, only: [:show, :update, :destroy]

  def index
    render json: @location.address
  end

  def show
    render json: @address
  end

  def create
    address = @location.addresses.new(address_params)

    if address.save
      render json: address
    else
      render json: address.errors, status: 422
    end
  end

  def update
    if @address.update(address_params)
      render json: @address
    else
      render json: @address.errors, status: 422
    end
  end

  def destroy
    @address.destroy
  end

  private
    def set_address
      @address = Address.find(params[:id])
    end

    def set_location
      @location = Location.find(params[:location_id])
    end

    def address_params
      params.require(:address).permit(:street_name, :city, :state, :zip)
    end
  end
