# == Schema Information
#
# Table name: listings
#
#  id         :bigint           not null, primary key
#  size       :float            not null
#  price      :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  sneaker_id :integer          not null
#
require 'test_helper'

class ListingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
