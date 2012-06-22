
module Slideshow
  module StepListHelper
    def step_list( opts={}, &blk )

      puts "  Adding HTML div block for step lists (incremental display)..."

      text = capture_erb(&blk)

      before  = guard_block "<!-- begin step #{opts.inspect} -->\n<div class='step' markdown='block'>\n"
      after   = guard_block "</div>\n<!-- end step -->\n"
      in_before  = guard_block "<div class='step'>"
      in_after   = guard_block "</div>"
      mid     = after+before

      html  = ""
      html << before
      html << text.gsub(/^~/, mid) # .gsub(/<#/,in_before).gsub(/#>/,in_after)
      html << after

      concat_erb( html, blk.binding )
      return
    end
  end
end

class Slideshow::Gen
  include Slideshow::StepListHelper
end
