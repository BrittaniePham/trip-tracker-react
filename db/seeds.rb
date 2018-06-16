6.times do 
  trip = Trip.create(
    title: Faker::Address.state
    )

  8.times do
    @location = trip.locations.create(
      name: Faker::Address.city
    )

    @location.create_address(
      location_id: @location,
      street_name: Faker::Address.street_address,
      city: Faker::Address.city,
      state: Faker::Address.state,
      zip: Faker::Address.zip_code
    )
  end
end

puts 'seeded'