while true; do
  if [[ ggg.textile -nt ggg.html ]]; then
      slideshow ggg &> /dev/null
    else
      sleep 1
    fi
  done
