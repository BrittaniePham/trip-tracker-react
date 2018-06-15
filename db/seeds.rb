6.times do 
  trip = Trip.create(
    title: Faker::Address.state
    )

  8.times do
    @location = trip.locations.create(
      name: Faker::Address.city
    )

    1.times do
      Address.create(
        location_id: @location,
        street_name: Faker::Address.street_address,
        city: Faker::Address.city,
        state: Faker::Address.state,
        zip: Faker::Address.zip_code
      )
    end
  end
end

puts 'seeded'