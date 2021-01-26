/// ES6

function movingAverage(numbers) {
  return numbers
          .map((_e, i) => numbers.slice(i, i + window))
          .map(average);
}

/// Classic JavaScript with Lodash

function movingAverage(numbers) {
  return _.chain(numbers)
          .map((_e, i) => numbers.slice(i, i + window))
          .map(average)
          .value();
}

/// Java 8 Streams

public static double average(List<Double> numbers) {
  return numbers
          .stream()
          .reduce(0.0, Double::sum) / numbers.size();
}

public static List<Double> movingAverage(List<Double> numbers) {
  return IntStream
          .range(0, numbers.size())
          .mapToObj(i -> numbers.subList(i, Math.min(i + 3, numbers.size())))
          .map(Utils::average)
          .collect(Collectors.toList());
}

/// C#

public static IEnumerable<Double> movingAverage(IEnumerable<Double> numbers) {
  return Enumerable
          .Range(0, numbers.Count())
          .Select(i => numbers.ToList().GetRange(i, Math.Min(3, numbers.Count() - i)))
          .Select(l => l.Average());
}